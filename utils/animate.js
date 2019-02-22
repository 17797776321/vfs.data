/*
  * name: Animate
  * author: 原张宸
  * date: 2019-2-22
**/
export class ScrollAnimate {
  constructor(dom,mode) {
    this.handleScroll = this.handleScroll.bind(this)
    this.init = this.init.bind(this)
    this.addAnimate = this.addAnimate.bind(this)
    this.dom = dom
    this.mode = mode
    this.documentConetn = document.body || document.documentElement
    this.init()
  }
  /* 初始化*/
  init(){
    let self = this;
    /* 判断当前DOM 是否需要滚动 */
    if(self.condition()){
      self.addAnimate()
    }else{
      window.addEventListener('scroll',self.handleScroll)
    }
  }
  /* 监听滚动*/
  handleScroll() {
    let self = this;
    self.addAnimate()
  }
  /* 满足滚动触发动画的条件 */
  condition(){
    return this.documentConetn.scrollTop + window.screen.availHeight >= this.dom.offsetHeight  + this.dom.offsetTop?true:false
  }
  /* 添加动画*/
  addAnimate(){
    let self = this
    // /* 先删后加*/
    this.dom.classList.remove('animated')
    this.dom.classList.remove(self.mode)
    /* 去掉隐藏 */
    this.dom.classList.remove('myhidden')
    this.dom.classList.add('animated')
    this.dom.classList.add(self.mode)
  }
}