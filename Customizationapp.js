var canvas = this.__canvas = new fabric.Canvas('c');

var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
var img = document.createElement('img');
img.src = deleteIcon;
fabric.Object.prototype.cornerColor = '#131313';
fabric.Object.prototype.transparentCorners = false;

// add rectangle
function addRect() {
  var rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: 'yellow',
    width: 200,
    height: 100,
    objectCaching: false,
    strokeWidth: 4 });


  canvas.add(rect);
  canvas.setActiveObject(rect);
}

// add text
function addText() {
  var itext = new fabric.IText('This is a IText object', {
    left: 100,
    top: 150,
    fill: '#131313',
    selectable: true });


  canvas.add(itext);
}

// upload image
function uploadImage(e) {
  console.log('ee', e);
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result;
    fabric.Image.fromURL(data, function (img) {
      img.scaleToWidth(300);
      var oImg = img.set({
        left: 0,
        top: 0,
        angle: 0 });


      canvas.add(oImg).renderAll();
      var a = canvas.setActiveObject(oImg);
      var dataURL = canvas.toDataURL({ format: 'png', quality: 0.8 });

    });
  };
  reader.readAsDataURL(file);
}
function importJson(e) {}
// upload svg
function uploadSVG(e) {
  var url = URL.createObjectURL(e.target.files[0]);
  fabric.loadSVGFromURL(url, function (objects, options) {
    objects.forEach(function (svg) {
      svg.set({
        top: 90,
        left: 90,
        originX: 'center',
        originY: 'center' });


      svg.scaleToWidth(50);
      canvas.add(svg).renderAll();
    });
  });
}
// use modal images
function addStockImg(e) {
  var imgObj = e.srcElement.currentSrc;

  fabric.Image.fromURL(imgObj, function (img) {
    img.scaleToWidth(300);
    var oImg = img.set({
      left: 0,
      top: 0,
      angle: 0,
      id: "00ab" });


    canvas.add(oImg).renderAll();
    var a = canvas.setActiveObject(oImg);
    document.location.href = "#";
  });
}

function exportToSvg() {
  var exportSvg = canvas.toSVG();
  localStorage.setItem('svg', exportSvg);
  var json_data = JSON.stringify(canvas.toDatalessJSON());
  console.log(json_data);
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(json_data);
  document.querySelector('#list').innerHTML = '<a href="" id="downloadAnchorElem"></a>';
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "scene.json");
  dlAnchorElem.click();
}
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24 });

function deleteObject(eventData, target) {
  var canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
}

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(img, -size / 2, -size / 2, size, size);
  ctx.restore();
}


var imgSrc = [
{
  img: "https://unsplash.it/400/500?random",
  name: "Item 1",
  price: "4€" },

{
  img: "https://unsplash.it/500/500?random",
  name: "Item 2",
  price: "4€" },

{
  img: "https://unsplash.it/500/400?random",
  name: "Item 3",
  price: "4€" },

{
  img: "https://unsplash.it/500/300?random",
  name: "Item 4",
  price: "3€" }];

var girlSrc = [
{
  img: "https://drawinghowtos.com/wp-content/uploads/2019/11/unicorn-colored.png",
  name: "Licorne",
  price: "5€" },

{
  img: "https://i.pinimg.com/originals/69/64/94/69649494d972df188fbbd2f15988419c.png",
  name: "Papillon",
  price: "2€" },

{
  img: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/12597.png",
  name: "Fleur de cerisier",
  price: "5€" }];

var illuSrc = [
{
  img: "https://isometric.online/wp-content/uploads/2020/05/people_svg.svg",
  name: "People",
  price: "5€" },

{
  img: "https://isometric.online/wp-content/uploads/2020/04/fitness_svg.svg",
  name: "Fitness",
  price: "5€" },

{
  img: "https://isometric.online/wp-content/uploads/2020/04/instagram_svg.svg",
  name: "Instagram",
  price: "4€" },

{
  img: "https://isometric.online/wp-content/uploads/2020/04/tv_svg.svg",
  name: "Télévision",
  price: "3€" }];



function changeImgSrc(src) {
  // Setup the HTML string
  var html = '';

  // Loop through each wizard and create a list item
  src.forEach(function (item) {
    html += '<li class="item-modal"><img class="img-stock" src="' + item.img + '" onclick="addStockImg(event)" alt="image asset" width="400" height="500"/><div class="infos-item"><span class="name">' + item.name + '</span><span class="price">' + item.price + '</span></div></li>';
  });

  document.querySelector('#list').innerHTML = html;
}

changeImgSrc(imgSrc);

var toggle = document.getElementById('toggle');
var toggleContainer = document.getElementById('toggle-container');
var importInput = document.getElementById('largeFile');
var toggleNumber;

toggle.addEventListener('click', function () {
  toggleNumber = !toggleNumber;
  if (toggleNumber) {
    toggleContainer.style.clipPath = 'inset(0 -1px -1px 50%)';
    toggleContainer.style.backgroundColor = '#131313';
    importInput.style.pointerEvents = 'auto';
  } else {
    toggleContainer.style.clipPath = 'inset(0 50% -1px -1px)';
    toggleContainer.style.backgroundColor = '#131313';
    importInput.style.pointerEvents = 'none';
  }
  console.log(toggleNumber);
});
var fileLoaded;
var loadFile = function (event) {
  fileLoaded = event;
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};

function importFile() {
  uploadImage(fileLoaded);
  document.location.href = "#";
}
function importSVG() {
  uploadSVG(fileLoaded);
  document.location.href = "#";
}
function importJson() {
  console.log('e', fileLoaded.target.files[0]);
  var json = fileLoaded.target.files[0];
  //uploadJson(fileLoaded)
  var result;
  var formatted;
  var fr = new FileReader();
  fr.onload = function (e) {
    console.log("2", e);
    result = JSON.parse(e.target.result);
    console.log("result", result);
    formatted = JSON.stringify(result, null, 2);
    console.log("formatted", formatted);

    loadJson(formatted);
  };

  fr.readAsText(json);
  document.location.href = "#";
}
function loadJson(formatted) {
  console.log('here');
  canvas.loadFromJSON(formatted, function (obj) {
    console.log(' this is a callback. invoked when canvas is loaded!xxx ');
    canvas.renderAll();

  });
}
var objType;
function switchDisplayFont(obj) {
  switch (objType) {
    case 'i-text':
      var obj = canvas.getActiveObject();
      var bold = document.getElementById('text-cmd-bold');
      var italic = document.getElementById('text-cmd-italic');
      var color = document.getElementById('color-selected');
      node = document.getElementById('i-text');
      node.classList.add("visible");
      color.style.backgroundColor = obj.fill;
      if (obj.fontWeight === 'bold') {bold.checked = true;} else
      {bold.checked = false;}
      if (obj.fontStyle === 'italic') {italic.checked = true;} else
      {italic.checked = false;}
      break;
    case 'image':
      node = document.getElementById('image');
      node.classList.add("visible");
      break;
    case 'rect':
      node = document.getElementById('image');
      node.classList.add("visible");
      break;
    default:
      console.log(`Sorry, we are out of`);}

}
function onObjectSelected() {
  var node;
  // check if type is a property of active element
  console.log('canvas.getActiveObject()', canvas.getActiveObject());
  objType = canvas.getActiveObject().type ? canvas.getActiveObject().type : "";
  switchDisplayFont(objType);
}
function onObjectCleared() {
  var node;
  var elements = document.getElementsByClassName('item-panel');
  clear();
  for (var i = 0; i < elements.length; i++) {if (window.CP.shouldStopExecution(0)) break;
    elements[i].classList.remove('visible');
  }window.CP.exitedLoop(0);
}
function onObjectUpdated() {
  var node;
  var elements = document.getElementsByClassName('item-panel');
  back();
  for (var i = 0; i < elements.length; i++) {if (window.CP.shouldStopExecution(1)) break;
    elements[i].classList.remove('visible');
  }
  // check if type is a property of active element
  window.CP.exitedLoop(1);objType = canvas.getActiveObject().type ? canvas.getActiveObject().type : "";
  switchDisplayFont(objType);
}
canvas.on('selection:created', onObjectSelected);
canvas.on('selection:cleared', onObjectCleared);
canvas.on('selection:updated', onObjectUpdated);
radios5 = document.getElementsByName("fonttype");
for (var i = 0, max = radios5.length; i < max; i++) {if (window.CP.shouldStopExecution(2)) break;
  radios5[i].onclick = function () {
    if (document.getElementById(this.id).checked == true) {
      if (this.id == "text-cmd-bold") {
        canvas.getActiveObject().set("fontWeight", "bold");
      }
      if (this.id == "text-cmd-italic") {
        canvas.getActiveObject().set("fontStyle", "italic");
      }
      if (this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("textDecoration", "underline");
      }
    } else {
      if (this.id == "text-cmd-bold") {
        canvas.getActiveObject().set("fontWeight", "");
      }
      if (this.id == "text-cmd-italic") {
        canvas.getActiveObject().set("fontStyle", "");
      }
      if (this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("textDecoration", "");
      }
    }
    canvas.renderAll();
  };
}window.CP.exitedLoop(2);
document.getElementById('fill-color').onchange = function () {
  canvas.getActiveObject().set("fill", this.value);
  canvas.renderAll();
};
//document.getElementById('text-color').onchange = function() {
// canvas.getActiveObject().set("fill", this.value);
// canvas.renderAll();
//};

document.getElementById('font-family').onchange = function () {
  canvas.getActiveObject().set("fontFamily", this.value);
  canvas.renderAll();
};

function clickColor() {
  let colorList = ["131313", "FFFFFF", "192F97", "D41C3B", "FF9090", "A92355", "E35110"];
  var general = document.getElementById('general-controls');
  general.classList.add("display");
  node = document.getElementById('color-controls');
  node.classList.add("display");
  listColor(colorList);
};
function back() {
  objType = canvas.getActiveObject().type ? canvas.getActiveObject().type : "";
  switchDisplayFont(objType);
  var general = document.getElementById('general-controls');
  general.classList.remove("display");
  node = document.getElementById('color-controls');
  node.classList.remove("display");
}
function clear() {
  var general = document.getElementById('general-controls');
  general.classList.remove("display");
  node = document.getElementById('color-controls');
  node.classList.remove("display");
}

function listColor(src) {
  console.log(src);
  // Setup the HTML string
  var html = '';
  var currentColor = canvas.getActiveObject().fill;
  // Loop through each color and create a list item
  src.forEach(function (item) {
    if ('#' + item === currentColor) {
      html += '<div class="color-item active" id="' + item + '" style="background-color:#' + item + ';" onclick="changeColor(\'' + item + '\')"></div>';
    } else {
      html += '<div class="color-item" id="' + item + '" style="background-color:#' + item + ';" onclick="changeColor(\'' + item + '\')"></div>';
    }

  });

  document.querySelector('#color-list').innerHTML = html;
}
function changeColor(color) {
  elements = document.getElementsByClassName("color-item");
  for (var i = 0; i < elements.length; i++) {if (window.CP.shouldStopExecution(3)) break;
    elements[i].classList.remove("active");
  }window.CP.exitedLoop(3);
  canvas.getActiveObject().set("fill", "#" + color);
  canvas.renderAll();
  var node = document.getElementById(color);
  node.classList.add("active");
}

function sendMessage() {
  window.parent.postMessage("To page code", "http://mysite.com");
}
//# sourceURL=pen.js
