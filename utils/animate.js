/*
  * name: Animate
  * author: 原张宸
  * date: 2019-2-22
**/
export class ScrollAnimate {
  constructor(dom,mode,isVue) {
    this.handleScroll = this.handleScroll.bind(this)
    this.init = this.init.bind(this)
    this.addAnimate = this.addAnimate.bind(this)
    this.dom = dom
    this.mode = mode
    this.isgoing = true
    this.isVue = isVue || false
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
    // self.addAnimate()
    if(self.condition() && self.isgoing){
      self.addAnimate()
    }
  }
  /* 满足滚动触发动画的条件 */
  condition(){
    if(this.isVue){
      return document.documentElement.scrollTop + window.screen.availHeight >= this.dom[0].offsetHeight  + this.dom[0].offsetTop?true:false
    }else{
      return document.documentElement.scrollTop + window.screen.availHeight >= this.dom.offsetHeight  + this.dom.offsetTop?true:false
    }
  }
  /* 添加动画*/
  addAnimate(){
    let self = this
    self.isgoing = false
    if(this.isVue){
      /* 先删后加*/
      self.dom[0].classList.remove('animated')
      self.dom[0].classList.remove(self.mode)
      /* 去掉隐藏 */
      self.dom[0].classList.remove('myhidden')
      self.dom[0].classList.add('animated')
      self.dom[0].classList.add(self.mode)
    }else{
      /* 先删后加*/
      self.dom.classList.remove('animated')
      self.dom.classList.remove(self.mode)
      /* 去掉隐藏 */
      self.dom.classList.remove('myhidden')
      self.dom.classList.add('animated')
      self.dom.classList.add(self.mode)
    }
  }
}