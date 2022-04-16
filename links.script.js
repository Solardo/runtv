//for adding or modifying the list from a json string
$(function () {

  //seeting accordian functionality
  $('#contactInfo').accordion({ heightStyle: "fill" });


  //setting onclick listener on search list
  $('#search-list').on('click', function () {
    var target = getEventTarget(event);
    var currId = target.id;
    var contactsArray = parseJson();
    for (var i = 0; i < contactsArray.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      if (contactsArray[i].id == currId) {
        setDefault();
        add(contactsArray[i]);
      }
    }window.CP.exitedLoop(0);
  });
});

function loadAllContacts() {
  document.getElementById('search-list').innerHTML = "";
  setDefault();
  // this function sets the contact list
  var contactsArray = parseJson();
  setList(contactsArray);
  $("#search-list").listview("refresh");
}





function setList(contactsArray) {
  for (var i = 0; i < contactsArray.length; i++) {if (window.CP.shouldStopExecution(1)) break;
    var one = contactsArray[i].firstname;
    var id = contactsArray[i].id;
    var num = contactsArray[i].number;
    var li = document.createElement('li');
    var ul = document.getElementById('search-list');
    li.className = "ui-btn ui-btn-icon-right ui-icon-carat-r";
    li.innerHTML = one;
    li.id = id;
    ul.appendChild(li);
  }window.CP.exitedLoop(1);
}

// these are for setting event onclick on every list item.. try some other method



function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

function setDefault() {
  document.getElementById('general').innerHTML = "";
}


function add(contactsArray)
{
  var generalLabels = new Array("Película encontrada");

  var general = document.getElementById('general');
  var counter = 0;
  var values = [];
  $.each(contactsArray, function (k, v) {
    values.push(v);
    counter++;
  });
 
  var k = 0;
  var enclDiv;
  var infoLabel;
  var info;
  var infoRow;
  while (k < counter) {if (window.CP.shouldStopExecution(2)) break;
    enclDiv = document.createElement('div');
    for (var i = 0; i < generalLabels.length; i++, k++) {if (window.CP.shouldStopExecution(3)) break;
      infoLabel = document.createElement('p');
      infoLabel.className = "info-label";
      infoLabel.innerHTML = generalLabels[i];
      info = document.createElement('p');
      info.className = "info";
      info.innerHTML = values[k];
      infoRow = document.createElement('div');
      infoRow.className = "info-row color-effect";
      infoRow.appendChild(infoLabel);
      infoRow.appendChild(info);
      enclDiv.className = "encl";
      enclDiv.appendChild(infoRow);
    }window.CP.exitedLoop(3);
    general.appendChild(enclDiv);

    enclDiv = document.createElement('div');
    for (i = 0; i < personalLabels.length; i++, k++) {if (window.CP.shouldStopExecution(4)) break;
      infoLabel = document.createElement('p');
      infoLabel.className = "info-label";
      infoLabel.innerHTML = personalLabels[i];
      info = document.createElement('p');
      info.className = "info";
      info.innerHTML = values[k];
      infoRow = document.createElement('div');
      infoRow.className = "info-row color-effect";
      infoRow.appendChild(infoLabel);
      infoRow.appendChild(info);
      enclDiv.className = "encl";
      enclDiv.appendChild(infoRow);
    }window.CP.exitedLoop(4);
    personal.appendChild(enclDiv);

    enclDiv = document.createElement('div');
    for (i = 0; i < businessLabels.length; i++, k++) {if (window.CP.shouldStopExecution(5)) break;
      infoLabel = document.createElement('p');
      infoLabel.className = "info-label";
      infoLabel.innerHTML = businessLabels[i];
      info = document.createElement('p');
      info.className = "info";
      info.innerHTML = values[k];
      infoRow = document.createElement('div');
      infoRow.className = "info-row color-effect";
      infoRow.appendChild(infoLabel);
      infoRow.appendChild(info);
      enclDiv.className = "encl";
      enclDiv.appendChild(infoRow);
    }window.CP.exitedLoop(5);
    business.appendChild(enclDiv);

    enclDiv = document.createElement('div');
    for (i = 0; i < notesLabels.length; i++, k++) {if (window.CP.shouldStopExecution(6)) break;
      infoLabel = document.createElement('p');
      infoLabel.className = "info-label";
      infoLabel.innerHTML = notesLabels[i];
      info = document.createElement('p');
      info.className = "info";
      info.innerHTML = values[k];
      infoRow = document.createElement('div');
      infoRow.className = "info-row color-effect";
      infoRow.appendChild(infoLabel);
      infoRow.appendChild(info);
      enclDiv.className = "encl";
      enclDiv.appendChild(infoRow);
    }window.CP.exitedLoop(6);
    notes.appendChild(enclDiv);
  }


  window.CP.exitedLoop(2);}
