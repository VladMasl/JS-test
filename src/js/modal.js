(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  const backdropEl = document.querySelector('.backdrop');
  backdropEl.addEventListener('click', onCloseModalClickBackdrop);
  function onCloseModalClickBackdrop(e) {
    if (e.target !== backdropEl) return;
    refs.modal.classList.add('is-hidden');
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
