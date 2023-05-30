function openCodePage(kleur) {
    window.location.href = "code.html?kleur=" + kleur;
  }
 
  function checkCode() {    
    var queryParams = new URLSearchParams(window.location.search);
    var kleur = queryParams.get("kleur");
    console.log("Kleur: " + kleur)
    var codeInput = document.getElementById("codeInput");
    var code = getCodeByKleur(kleur); // Vervang deze functie met je eigen logica om de code per kleur op te halen
    var tekst = codeInput.value;
    
    if (typeof tekst === 'string' && tekst.length > 0 && codeInput.value === code) {    
      showPopup("Proficiat, het is jullie gelukt om de " + kleur + " kist te openen!", "Images/Open " + kleur + ".gif");
    } else {
      document.body.classList.add("rode-pagina");
      document.getElementById("resultaat").innerHTML = "Foute code! De kist blijft dicht";
      codeInput.disabled = true;
      setTimeout(function() {
        document.body.classList.remove("rode-pagina");
        document.getElementById("resultaat").innerHTML = "";
        codeInput.disabled = false;
      }, 5000);
    }
  }
  
  function showPopup(message, imageUrl) {
    // Centreren van het popupvenster    
    var windowWidth = 600;
    var windowHeight = 600;
    var leftPosition = (window.screen.width - windowWidth) / 2;
    var topPosition = (window.screen.height - windowHeight) / 2;

    var popupFeatures = "popup=yes, innerWidth=" + windowWidth + ", innerHeight=" + windowHeight + ", left="+leftPosition+ ", top=" + topPosition;    
    popupWindow = window.open("", "_blank", popupFeatures);
    
    popupWindow.document.write("<html><head><title>" + message + "</title><link rel='stylesheet' type='text/css' href='styles.css'></link></head><body>");
    popupWindow.document.write("<h1>" + message + "</h1>");    
    popupWindow.document.write("<img src='" + imageUrl + "'>");
    if (typeof tekst === 'string' && tekst.length > 0) {
      popupWindow.document.write("<h2>" + tekst + "</h2>");
    }
    popupWindow.document.write("<br /><br /><button onclick='window.close()'>Sluiten</button>");
    popupWindow.document.write("</body></html>");
  }

  function getCodeByKleur(kleur) {
    // Hier kun je de juiste code bepalen op basis van de kleur
    switch (kleur) {
      case "paarse":        
        return "code1";
      case "blauwe":
        return "code2";
      case "groene":
        return "code3";
      case "geel":
        return "code4";
      case "oranje":
        return "code5";
      case "roze":
        return "code5";
      default:
        return "";
    }
  }

  function goToStart() {
    window.history.back();
  }
