;(function(doc){

  var Waterfall = function(wrapper, opt){
    this.oWrapper = doc.getElementsByClassName(wrapper)[0];
    this.column = opt.column;
    this.gap = opt.gap;
    this.itemWidth = (this.oWrapper.offsetWidth - (this.column - 1) * this.gap) / this.column; 
    this.pageNum = 0;
    this.pageSize = 0;
    this.heightArr = [];

    this.init();
  }

  Waterfall.prototype = {
    init: function(){
      this.bindEvent();
      this.getImgDatas();
    },

    bindEvent: function(){

    },

    scrollToBottom: function(){

    },

    getImgDatas: function(pageNum){
      var _self = this;
      xhr.ajax({
        url: 'server/index.php',
        type: 'post',
        dataType: 'JSON',
        data: {
          pageNum: pageNum,
        },
        success: function(data){
          if(data != 'NO DATA'){
            var pageData = JSON.parse(data.pageData);
            _self.pageSize = +pageSize;

            console.log(pageData);
          }
        }
      })
    },

    renderList: function(){

    }
  }

  window.Waterfall = Waterfall;

})(document);