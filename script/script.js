function atualizarTexto(event) {
  var inputValue = event.target.value; // Obtém o valor do campo de input
  var inputId = event.target.id; // Obtém o id do campo de input

  //Limitar as entradas de caracteres
  if (inputId === "nameUser" && inputValue.length > 19) {
    /* Limitar os caracteres de entradas*/
    inputValue = inputValue.slice(0, 20); // corta os caracteres além do limite
    event.target.value = inputValue;
    // atualiza o camp com o valor cortado
  } else if (inputId === "numberCard" && inputValue.length > 15) {
    inputValue = inputValue.slice(0, 16); // corta os caracteres além do limite
    event.target.value = inputValue;
    // atualiza o camp com o valor cortado
  } else if (inputId === "MM" && inputValue.length >= 2) {
    inputValue = inputValue.slice(0, 2); // corta os caracteres além do limite
    event.target.value = inputValue;
    // atualiza o camp com o valor cortado
  } else if (inputId === "YY" && inputValue.length >= 2) {
    inputValue = inputValue.slice(0, 2); // corta os caracteres além do limite
    event.target.value = inputValue;
    // atualiza o camp com o valor cortado
  } else if (inputId === "CVC" && inputValue.length >= 3) {
    inputValue = inputValue.slice(0, 3); // corta os caracteres além do limite
    event.target.value = inputValue;
    // atualiza o camp com o valor cortado
  }
  // Exibe no console o valor dos inputs e IDs
  console.log(`ID: ${inputId}, Valor: ${inputValue}`);
  function atualizarTexto(event) {
    var inputValue = event.target.value; // Obtém o valor do campo de input
    var inputId = event.target.id; // Obtém o id do campo de input

    // Exibe no console o valor dos inputs e IDs
    console.log(`ID: ${inputId}, Valor: ${inputValue}`);

    // Atualiza os dados do cartão conforme o campo que foi alterado
    if (inputId === "nameUser") {
      document.getElementById("cartaoTitular").innerText =
        inputValue || "Jane Appleseed"; // Se vazio, exibe 'Jane Appleseed'
    } else if (inputId === "numberCard") {
      // Formata o número do cartão
      var formattedCard = inputValue
        .replace(/\D/g, "")
        .replace(/(.{4})(?=.)/g, "$1 ")
        .slice(0, 19); // Formatação a cada 4 números
      document.getElementById("cartaoNumero").innerText =
        formattedCard || "0000 0000 0000 0000";
    } // Atualizar o mês (MM)
    else if (inputId === "MM") {
      document.getElementById("MMdisplay").innerText = inputValue || "00";
    } else if (inputId === "YY") {
      document.getElementById("YYdisplay").innerText = inputValue || "00";
    } else if (inputId === "CVC") {
      // Atualiza o CVC

      document.getElementById("cartaoCVC").innerText = inputValue || "000";
    }
    //Limitar as entradas de caracteres
    if (inputId === "nameUser" && inputValue.length > 19) {
      /* Limitar os caracteres de entradas*/
      inputValue = inputValue.slice(0, 20); // corta os caracteres além do limite
      event.target.value = inputValue;
      // atualiza o camp com o valor cortado
    } else if (inputId === "numberCard" && inputValue.length > 15) {
      inputValue = inputValue.slice(0, 16); // corta os caracteres além do limite
      event.target.value = inputValue;
      // atualiza o camp com o valor cortado
    } else if (inputId === "MM" && inputValue.length >= 2) {
      inputValue = inputValue.slice(0, 2); // corta os caracteres além do limite
      event.target.value = inputValue;
      // atualiza o camp com o valor cortado
    } else if (inputId === "YY" && inputValue.length >= 2) {
      inputValue = inputValue.slice(0, 2); // corta os caracteres além do limite
      event.target.value = inputValue;
      // atualiza o camp com o valor cortado
    } else if (inputId === "CVC" && inputValue.length >= 3) {
      inputValue = inputValue.slice(0, 3); // corta os caracteres além do limite
      event.target.value = inputValue;
      // atualiza o camp com o valor cortado
    }
  }

  // Atualiza os dados do cartão conforme o campo que foi alterado
  if (inputId === "nameUser") {
    document.getElementById("cartaoTitular").innerText =
      inputValue || "Jane Appleseed"; // Se vazio, exibe 'Jane Appleseed'
  } else if (inputId === "numberCard") {
    // Formata o número do cartão
    var formattedCard = inputValue
      .replace(/\D/g, "")
      .replace(/(.{4})(?=.)/g, "$1 ")
      .slice(0, 19); // Formatação a cada 4 números
    document.getElementById("cartaoNumero").innerText =
      formattedCard || "0000 0000 0000 0000";
  } // Atualizar o mês (MM)
  else if (inputId === "MM") {
    document.getElementById("MMdisplay").innerText = inputValue || "00";
  } else if (inputId === "YY") {
    document.getElementById("YYdisplay").innerText = inputValue || "00";
  } else if (inputId === "CVC") {
    // Atualiza o CVC

    document.getElementById("cartaoCVC").innerText = inputValue || "000";
  }

  document
    .getElementById("formularioCartao")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o reload da página

      // Esconde o formulário
      document.getElementById("formularioCartao").style.display = "none";

      // Mostra a mensagem final
      document.querySelector(".final").style.display = "flex";
    });

  document
    .getElementById("resertButton")
    .addEventListener("click", function () {
      // Mostrar formulário de novo
      document.getElementById("formularioCartao").style.display = "block";

      // Esconder mensagem final
      document.querySelector(".final").style.display = "none";

      // Limpar os campos do formulário
      document.getElementById("formularioCartao").reset();

      // Resetar os dados exibidos no cartão também (opcional)
      document.getElementById("cartaoNumero").innerText = "0000 0000 0000 0000";
      document.getElementById("cartaoTitular").innerText = "Jane Appleseed";
      document.getElementById("MMdisplay").innerText = "00";
      document.getElementById("YYdisplay").innerText = "00";
      document.getElementById("cartaoCVC").innerText = "000";
    });
}
