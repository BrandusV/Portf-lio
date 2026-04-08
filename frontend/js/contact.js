/**
 * NEURAL_ARCHIVE — Contact Page JavaScript
 * Handles: form validation, submission to /api/contact,
 *          field error display, success/error states.
 */

(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('submit-btn');
  const statusBanner = document.getElementById('form-status');

  /* ---------- Helpers ---------- */
  function getField(name) {
    return form.querySelector(`[name="${name}"]`);
  }

  function getErrorSpan(name) {
    return form.querySelector(`.field-error[data-for="${name}"]`);
  }

  function setFieldError(name, msg) {
    const field = getField(name);
    const span = getErrorSpan(name);
    if (field) field.classList.add('form-field-error');
    if (span) { span.textContent = msg; span.classList.remove('hidden'); }
  }

  function clearFieldError(name) {
    const field = getField(name);
    const span = getErrorSpan(name);
    if (field) field.classList.remove('form-field-error');
    if (span) { span.textContent = ''; span.classList.add('hidden'); }
  }

  function clearAllErrors() {
    ['name', 'email', 'message'].forEach(clearFieldError);
    if (statusBanner) statusBanner.classList.add('hidden');
  }

  function showStatus(msg, type = 'success') {
    if (!statusBanner) return;
    statusBanner.textContent = msg;
    statusBanner.className = [
      'mb-6 p-4 border-l-2 text-sm font-mono',
      type === 'success'
        ? 'border-tertiary text-tertiary bg-tertiary/5'
        : 'border-error text-error bg-error/5',
    ].join(' ');
    statusBanner.classList.remove('hidden');
  }

  /* ---------- Real-time validation ---------- */
  ['name', 'email', 'message'].forEach(name => {
    const field = getField(name);
    if (!field) return;
    field.addEventListener('input', () => clearFieldError(name));
    field.addEventListener('blur', () => validateField(name, field.value));
  });

  function validateField(name, value) {
    if (name === 'name' && value.trim().length < 2) {
      setFieldError('name', 'At least 2 characters required.');
      return false;
    }
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFieldError('email', 'Valid email address required.');
      return false;
    }
    if (name === 'message' && value.trim().length < 10) {
      setFieldError('message', 'Message must be at least 10 characters.');
      return false;
    }
    clearFieldError(name);
    return true;
  }

  /* ---------- Submit ---------- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearAllErrors();

    const name = getField('name').value;
    const email = getField('email').value;
    const subject = getField('subject')?.value || '';
    const message = getField('message').value;

    // Client-side validation
    const valid = [
      validateField('name', name),
      validateField('email', email),
      validateField('message', message),
    ].every(Boolean);

    if (!valid) return;

    // Submit
    const submitSpan = submitBtn.querySelector('span[data-i18n]');
    const setSubmitText = (t) => { if (submitSpan) submitSpan.textContent = t; else submitBtn.textContent = t; };
    setSubmitText('TRANSMITTING...');
    submitBtn.disabled = true;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Server returned validation errors
        if (data.fields) {
          Object.entries(data.fields).forEach(([field, msg]) => setFieldError(field, msg));
        }
        showStatus(data.error || 'TRANSMISSION_FAILED — retry.', 'error');
        return;
      }

      showStatus('TRANSMISSION RECEIVED — response within 24 system cycles.', 'success');
      form.reset();
      showToast('MESSAGE SENT SUCCESSFULLY');
    } catch {
      showStatus('CONNECTION ERROR — check your network and retry.', 'error');
      showToast('NETWORK ERROR', 'error');
    } finally {
      setSubmitText(window.t?.('contact.submit') || 'TRANSMIT >');
      submitBtn.disabled = false;
    }
  });
})();
