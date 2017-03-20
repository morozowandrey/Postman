
// main object
var Page = {
    checkMobile: function () {
        if ($('.twoxtwo-jumbotron').width() <= 800 && $('.twoxtwo-jumbotron').height() <= 800) {
            return true;
        } else {
            return false;
        }
    },
    Youtube: {
        getQuality: function(width){
            if(width>1920) {
                q = 'highres';
            } else if (width<1920 && width>=1280) {
                q = 'hd1080';
            } else if (width<1280 && width>=853) {
                q = 'hd720';
            } else if (width<853 && width>=640) {
                q = 'large';
            } else if (width<640 && width>=480) {
                q = 'medium';
            } else if (width<480) {
                q = 'small';
            }
            return q;
        },
        ajaxVideoBlockLoad: function (loop,elid,width,height) {
            player = new YT.Player(elid, {
                height: Page.videoResize(width,height,loop)*height/width,
                width: Page.videoResize(width,height,'#'+elid),
                videoId: loop,
                playerVars: {
                    autoplay:0,
                    autohide:1,
                    loop: 0,
                    controls:0,
                    modestbranding:1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        },
    },
    videoResize: function (width, height, video) {
        if ($('.twoxtwo-jumbotron').width() / $('.twoxtwo-jumbotron').height() > width / height) {
            if ($('.twoxtwo-jumbotron').width > width) {
                $(video).css({'margin-top': -height * ($('.twoxtwo-jumbotron').width() / width - 1) / 2 + 'px'});
            }
            else {
                $(video).css({'margin-top': -(height * ($('.twoxtwo-jumbotron').width() / width) - $('.twoxtwo-jumbotron').height()) / 2 + 'px'});
            }
            return $('.twoxtwo-jumbotron').width();
        } else {
            if ($('.twoxtwo-jumbotron').height() > height) {
                $(video).css({'margin-left': -width * ($('.twoxtwo-jumbotron').height() / height - 1) / 2 + 'px'});
            }
            else {
                $(video).css({'margin-left': -(width * ($('.twoxtwo-jumbotron').height() / height) - $('.twoxtwo-jumbotron').width()) / 2 + 'px'});
            }
            return width * ($('.twoxtwo-jumbotron').height() / height);
        }
    },
}

//run youtube player
if(Page.checkMobile()){
    $('#twoxtwo__video').remove();
} else {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
}
function onYouTubePlayerAPIReady() {
    Page.Youtube.ajaxVideoBlockLoad('i-qGP7b1Xwc', 'twoxtwo__video', 1920, 1080);
}
//on player ready
function onPlayerReady(event) {
    event.target.setPlaybackQuality(Page.Youtube.getQuality($('.twoxtwo-jumbotron').width()));
    event.target.mute();
    event.target.playVideo();
}
//on play end
function onPlayerStateChange(event) {
    if (event.data == 0) {
        event.target.mute();
        event.target.playVideo();
    }
}
//init all scripts
Page.init();