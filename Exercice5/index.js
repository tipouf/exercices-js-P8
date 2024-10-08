// script.js

// Sélection des éléments du formulaire
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('button[type="submit"]');

// Ajout d'un événement pour valider le formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Vérification des champs du formulaire
  if (nameInput.value.trim() === '') {
    alert('Veuillez saisir votre nom');
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Veuillez saisir votre adresse e-mail');
    return;
  }

  // Envoi des données du formulaire
  console.log(`Nom : ${nameInput.value}`);
  console.log(`E-mail : ${emailInput.value}`);

  // Réinitialisation des champs du formulaire
  nameInput.value = '';
  emailInput.value = '';
});

// Sélection de l'image
const image = document.querySelector('img');

// Ajout d'un événement pour afficher une description de l'image
image.addEventListener('click', () => {
  alert(`Description de l'image : ${image.alt}`);
});

// Sélection du lien
const link = document.querySelector('a');

// Ajout d'un événement pour afficher une description du lien
link.addEventListener('mouseover', () => {
  console.log(`Description du lien : ${link.title}`);
});