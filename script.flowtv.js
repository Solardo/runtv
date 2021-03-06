flowplayer.cloud.then(function () {
  var api = flowplayer("#player");
  var thumbs = document.querySelectorAll('[data-video]');

  function select(index) {
    for (var i = 0; i < thumbs.length; ++i) {if (window.CP.shouldStopExecution(0)) break;
      thumbs[i].classList.toggle('selected', i == index);
    }window.CP.exitedLoop(0);
  }

  ;[].forEach.call(thumbs, function (thumb, i) {
    thumb.onclick = function () {
      api.setSrc(thumb.dataset.video);
      api.play();
      select(i);
    };
  });

  select(0);
});
