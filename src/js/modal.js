(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdropEl: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdropEl.addEventListener('click', onCloseModalClickBackdrop);

  function onCloseModalClickBackdrop(e) {
    if (e.target !== refs.backdropEl) return;
    refs.modal.classList.add('is-hidden');
  }

  window.addEventListener('keydown', evt => {
    const isEscKey = evt.code === 'Escape';
    if (isEscKey) {
      refs.modal.classList.add('is-hidden');
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
