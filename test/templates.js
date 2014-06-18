var JST = (function(){
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['api-collection']=function anonymous(it, format, __
/**/) {
var out='';if(it.ads){out+='<div class="ad ad-banner loading"></div>';}out+='<ul class="list-container"></ul><div class="loading-indicator"></div>';if(it.loadMoreButton){out+='<div class="expand-button load-more" data-hasmore="false"></div>';}return out;
};
  tmpl['channels-item']=function anonymous(it, format, __
/**/) {
var out='<p>'+( it.name )+'</p>';return out;
};
  tmpl['comments-item']=function anonymous(it, format, __
/**/) {
var out='<div class="comment-owner-avatar" style="background-image: url('+( it.owner.avatar_60_url )+')"></div><div class="comment-details"><p><span class="comment-screenname">'+( it.owner.screenname )+'</span><small class="comment-date">'+( format.timeElapsed('created_time') )+'</small></p><p class="comment-message">'+( it.message )+'</p></div>';return out;
};
  tmpl['playlists-item']=function anonymous(it, format, __
/**/) {
var out='<div class="list-item-thumbnail" style="background-image: url('+( it.thumbnail_small_url )+')"><div class="list-item-thumbnail-infos">'+( format.number('videos_total') )+' videos</div></div><div class="list-item-content"><h3 class="list-item-title">'+( it.name )+'</h3><p class="created_time">Created '+( format.timeElapsed('created_time') )+'</p></div>';return out;
};
  tmpl['users-item']=function anonymous(it, format, __
/**/) {
var out='<div class="list-item-thumbnail" style="background-image:url('+( it.avatar_60_url )+');"></div><div class="list-item-content"><h3 class="list-item-title">'+( it.screenname )+'</h3><div class="list-item-nowrap-left" data-vlen="'+( String(it.videos_total).length )+'"><strong>'+( __('%d video', it.videos_total) )+'</strong></div><div class="list-item-nowrap-right">'+( __('%d view', it.views_total) )+'</div></div>';return out;
};
  tmpl['videos-item']=function anonymous(it, format, __
/**/) {
var out='<div class="list-item-thumbnail" style="background-image:url('+( it.thumbnail_120_url )+');">';if(it.onair){out+='<div class="list-item-thumbnail-infos live">LIVE</div>';}else{out+='<div class="list-item-thumbnail-infos">'+( format.duration('duration') )+'</div>';}out+='</div><div class="list-item-content"><h3 class="list-item-title">'+( it.title )+'</h3><div class="list-item-nowrap-left" data-vlen="'+( String(it.views_total).length )+'"><strong>'+( it.owner.screenname )+'</strong></div><div class="list-item-nowrap-right">'+( format.number('views_total') )+' views</div></div>';return out;
};
  tmpl['device-landscape']=function anonymous(it, format, __
/**/) {
var out='@media screen and (orientation:landscape){';var arr1=it.list_item_nowrap;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+='.list-item-nowrap-left[data-vlen="'+(index)+'"]{max-width: '+(value)+'px;}';} } out+='.list-item[data-thumbnail="wide"],.list-item[data-thumbnail="squared"]{min-height: '+( it.video_thumbnail.height )+'px;}.list-item[data-thumbnail="wide"] .list-item-thumbnail{width: '+( it.video_thumbnail.width )+'px;height: '+( it.video_thumbnail.height )+'px;}.list-item[data-thumbnail="wide"] .list-item-content{margin-left: '+( it.video_thumbnail.width )+'px;max-width: '+( it.list_item.width )+'px;}.list-item[data-thumbnail="squared"] .list-item-thumbnail{width: '+( it.video_thumbnail.height )+'px;height: '+( it.video_thumbnail.height )+'px;}.list-item[data-thumbnail="squared"] .list-item-content{margin-left: '+( it.video_thumbnail.height )+'px;}.video-poster{width: '+( it.video_poster.width )+'px;height: '+( it.video_poster.height )+'px;}}';return out;
};
  tmpl['device-portrait']=function anonymous(it, format, __
/**/) {
var out='@media screen and (orientation:portrait){';var arr1=it.list_item_nowrap;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+='.list-item-nowrap-left[data-vlen="'+(index)+'"]{max-width: '+(value)+'px;}';} } out+='.list-item[data-thumbnail="wide"],.list-item[data-thumbnail="squared"]{min-height: '+( it.video_thumbnail.height )+'px;}.list-item[data-thumbnail="wide"] .list-item-thumbnail{width: '+( it.video_thumbnail.width )+'px;height: '+( it.video_thumbnail.height )+'px;}.list-item[data-thumbnail="wide"] .list-item-content{margin-left: '+( it.video_thumbnail.width )+'px;max-width: '+( it.list_item.width )+'px;}.list-item[data-thumbnail="squared"] .list-item-thumbnail{width: '+( it.video_thumbnail.height )+'px;height: '+( it.video_thumbnail.height )+'px;}.list-item[data-thumbnail="squared"] .list-item-content{margin-left: '+( it.video_thumbnail.height )+'px;}.video-poster{width: '+( it.video_poster.width )+'px;height: '+( it.video_poster.height )+'px;}}';return out;
};
  tmpl['device']=function anonymous(it, format, __
/**/) {
var out='.sidemenu-open #app-slider{-webkit-transform: translate3d('+( it.device.width - 44 )+'px,0,0);}#sidemenu{width: '+( it.device.width )+'px;}#sidemenu-content{width: '+( it.device.width - 44 )+'px;min-height: '+( it.device.height )+'px;}.sidemenu-item{max-width: '+( it.device.width - 44 )+'px;}';return out;
};
  tmpl['header']=function anonymous(it, format, __
/**/) {
var out='';if(!it.searching){out+='<div class="header-logo"></div><div class="header-menu-button icon icon-menu"></div><div class="header-search-button icon icon-search"></div>';}else{out+='<div class="header-search-bar" open="0"><div class="icon icon-back-arrow"></div><form><input type="search" class="input-text"/></form><div class="icon icon-close"></div></div>';}return out;
};
  tmpl['menu-item-channel']=function anonymous(it, format, __
/**/) {
var out='<li class="sidemenu-item" data-id="'+( it.id )+'">'+( it.name )+'</li>';return out;
};
  tmpl['menu-item-user']=function anonymous(it, format, __
/**/) {
var out='<li class="sidemenu-item"data-type="user"data-id="'+( it.id )+'"data-username="'+( it.username )+'"style="background-image:url('+( it.avatar_60_url )+')">'+( it.screenname )+'</li>';return out;
};
  tmpl['menu-item-video']=function anonymous(it, format, __
/**/) {
var out='<li class="sidemenu-item" data-id="'+( it.id )+'">'+( it.title )+'</li>';return out;
};
  tmpl['menu-item']=function anonymous(it, format, __
/**/) {
var out='<li class="sidemenu-item" data-id="'+( it.id )+'">'+( it.name )+'</li>';return out;
};
  tmpl['menu']=function anonymous(it, format, __
/**/) {
var out='<div id="sidemenu-content">';if(it.logged){out+='<div class="sidemenu-user"><span class="sidemenu-user-avatar" style="background-image: url('+( it.user.avatar_60_url )+')"></span><p class="sidemenu-user-screenname">'+( it.user.screenname )+'</p><p class="sidemenu-user-username">'+( it.user.username )+'</p></div><h4 class="sidemenu-section" data-action="settings">Settings</h4><ul data-group="userfeed"><li class="sidemenu-item" data-action="home">Home</li><li class="sidemenu-item" data-action="newsfeed">Newsfeed</li><!--<li class="sidemenu-item" data-action="watchlater">Watch Later</li>--><li class="sidemenu-item" data-action="favorites">Favorites</li><li class="sidemenu-item" data-action="playlists">Playlists</li><li class="sidemenu-item" data-action="myvideos">My Videos</li><!--<li class="sidemenu-section" data-action="history">History</li>--></ul><h4 class="sidemenu-section">Following</h4><ul class="sidemenu-list" data-group="following">';if(it.following){out+=( it.following );}out+='</ul>';}else{out+='<h4 class="sidemenu-section" data-action="sign-in">Sign In</h4><h4 class="sidemenu-section" data-action="settings">Settings</h4>';}out+='<h4 class="sidemenu-section">Channels</h4><ul class="sidemenu-list" data-group="channels">';if(it.channels){out+=( it.channels );}out+='</ul></div><div id="sidemenu-close-area"></div>';return out;
};
  tmpl['channel']=function anonymous(it, format, __
/**/) {
var out='<h4 class="page-separator"><p>'+( it.name )+' Videos</p><small>'+( it.description ||'').toString().encodeHTML()+'</small></h4><div class="page-content"></div>';return out;
};
  tmpl['error']=function anonymous(it, format, __
/**/) {
var out='<h1><%= data.type %></h1>';return out;
};
  tmpl['home']=function anonymous(it, format, __
/**/) {
var out='<div class="page-content"></div>';return out;
};
  tmpl['newsfeed-item']=function anonymous(it, format, __
/**/) {
var out='<div class="list-item-thumbnail" style="background-image:url('+( it.icon )+');"></div><div class="list-item-content"><p class="timeElapsed">'+( it.timeElapsed )+'</p><p class="description"><strong>'+( it.username )+'</strong>&nbsp;'+( it.message )+'</p></div>';return out;
};
  tmpl['search-suggestions']=function anonymous(it, format, __
/**/) {
var out='';if(it.query){out+='<p class="autocomplete-query">Results for "'+( it.query ||'').toString().encodeHTML()+'"</p>';}out+='<ul class="autocomplete-list">';var arr1=it.models;if(arr1){var item,index=-1,l1=arr1.length-1;while(index<l1){item=arr1[index+=1];out+='<li class="autocomplete-list-item" data-term="'+( item.get('text') )+'"><p>'+( item.get('html') )+'</p><div class="autocomplete-list-upquery"></div></li>';} } out+='</ul>';return out;
};
  tmpl['search']=function anonymous(it, format, __
/**/) {
var out='<div class="page-content"></div>';return out;
};
  tmpl['settings']=function anonymous(it, format, __
/**/) {
var out='<h3 class="page-separator">General</h3><table class="form-table"><tr class="table-row"><td class="table-cell">Country</td><td class="table-cell">'+( it.countryCode )+'</td></tr><tr class="table-row"><td class="table-cell">Family Filter</td><td class="table-cell">';if(it.familyFilter){out+='<button class="tickbox" name="familyFilter" data-type="on/off" checked>On</button>';}else{out+='<button class="tickbox" name="familyFilter" data-type="on/off">Off</button>';}out+='</td></div><tr class="table-row"><td class="table-cell">Open Dailymotion links with the native app?</td><td class="table-cell">';if(it.useNativeApp){out+='<button class="tickbox" name="useNativeApp" data-type="yes/no" checked>Yes</button>';}else{out+='<button class="tickbox" name="useNativeApp" data-type="yes/no">No</button>';}out+='</td></tr><tr class="table-row"><td class="table-cell">Use desktop version</td><td class="table-cell">';if(it.useDesktopVersion){out+='<button class="tickbox" name="useDesktopVersion" data-type="yes/no" checked>Yes</button>';}else{out+='<button class="tickbox" name="useDesktopVersion" data-type="yes/no">No</button>';}out+='</td></tr><table><h3 class="page-separator">History</h3><div class="form-list"><table class="form-table"><tr class="table-row"><td class="table-cell">Search History</td><td class="table-cell">';if(it.searchHistory){out+='<button class="tickbox" name="searchHistory" data-type="on/off" checked>On</button>';}else{out+='<button class="tickbox" name="searchHistory" data-type="on/off">Off</button>';}out+='</td></tr><tr class="table-row"><td class="table-cell">Watch History</td><td class="table-cell">';if(it.searchHistory){out+='<button class="tickbox" name="watchHistory" data-type="on/off" checked>On</button>';}else{out+='<button class="tickbox" name="watchHistory" data-type="on/off">Off</button>';}out+='</td></tr><tr class="table-row"><td class="table-cell" colspan="2">Clear History</td></tr></table></div>';return out;
};
  tmpl['user']=function anonymous(it, format, __
/**/) {
var out='<div class="userdetails page-separator"><div class="table"><div class="avatar table-cell" style="background-image: url('+( it.avatar_120_url )+')"></div><div class="infos table-cell"><h2 class="username">'+( it.screenname )+'</h2><p class="views_total">'+( format.number('views_total') )+' views</p>';if(it.isLogged()){out+='<button class="follow-button">Follow</button>';}out+='</div></div><div class="navbar"><span class="navbar-tab" data-target="videos" active>Videos ('+( format.number('videos_total') )+')</span><span class="navbar-tab" data-target="playlists">Playlists ('+( format.number('playlists_total') )+')</span></div></div><div class="navbar-content"></div>';return out;
};
  tmpl['video']=function anonymous(it, format, __
/**/) {
var out='<!-- <div class="video-poster" style="background-image:url('+( it.thumbnail_360_url )+');"></div> --><div class="video-poster"></div><div class="page-block player__video-infos"><h2 class="h2">'+( it.title ||'').toString().encodeHTML()+'</h2><div class="page-label"><span class="player__owner-screenname">'+( it.owner.screenname ||'').toString().encodeHTML()+'</span><span class="player__more-infos expand-button"></span><span class="player__views-total">'+( format.number('views_total') )+' views</span></div><div class="player__extra-infos"><p class="player__description">'+( it.description ||'').toString().encodeHTML()+'</p><p class="player__created-time">Published on '+( format.date('created_time') )+'</p><button class="player__report-button">Report Video</button></div></div>';if(it.ads){out+='<div class="ad ad-banner loading"></div><div class="ad ad-interstitial"></div>';}out+='<h4 class="page-separator">Related Videos</h4><div class="related-videos"></div><h4 class="page-separator">Comments</h4><div class="comments"></div>';return out;
};
return tmpl;})();