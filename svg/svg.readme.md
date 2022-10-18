# 组成元素
>- w3c文档 <https://www.w3cschool.cn/svg/svg-tutorial.html>
>- 实例 <https://www.w3cschool.cn/svg/svg-examples.html>
>- 动画 animation <https://segmentfault.com/a/1190000009371194#articleHeader3>
>- <rect> 矩形
>- <circle> 圆形
>- <ellipse> 椭圆
>- <line> 线
>- <polyline> 折线
>- <ploygon> 多边形
>- <path> 路径
>-- <path>
    M = moveto 移动
    L = lineto 
    H = horizontal lineto 水平线
    V = vertical lineto 垂直线
    C = curveto 曲线
    S = smooth curveto 光滑曲线
    Q = quadratic Bézier curve 贝塞尔曲线
    T = smooth quadratic Bézier curveto 光滑贝塞尔曲线
    A = elliptical Arc 圆/椭圆
    Z = closepath 关闭
>-- <Stroke>
    stroke  颜色
    stroke-width 宽度
    stroke-linecap 属性定义不同类型的开放路径的终结 
       butt粗角 round圆角 square方形
    stroke-dasharray 虚线
>-- svg 滤镜
    feBlend - 与图像相结合的滤镜
    feColorMatrix - 用于彩色滤光片转换
    feComponentTransfer
    feComposite
    feConvolveMatrix
    feDiffuseLighting
    feDisplacementMap
    feFlood
    feGaussianBlur
    feImage
    feMerge
    feMorphology
    feOffset - 过滤阴影
    feSpecularLighting
    feTile
    feTurbulence
    feDistantLight - 用于照明过滤
    fePointLight - 用于照明过滤
    feSpotLight - 用于照明过滤

>-- gradient 渐变
    linearGradient 线性
    radialGradient 放射性
>-- <animation></animation> 动画元素
    attributeName 元素属性名
    attributeType [CSS|XML]
    from & to & by
    begin & dur & end
    fill [freeze|remove]
    repeatDur 动画的总时长 [n|indefinit]
    repeatCount 动画重复次数 [n|indefinit]
    values 一个动画经过的节点数值，数值间以分号分割 [圆半径r][20,50,20]
    keyTimes 每个节点动画时长 [总进程1]-[0,0.2,1]-[0.2秒时圆的半径由20变为50，在之后的0.8秒又从50变为20。]
    calcMode 节点动画特性[paced, linear, discrete, spline]
    [ps: paced=动画会忽略keyTimes属性，根据values数值以匀速变化。]
    [ps: linear=动画根据values和keyTimes属性，在每个时间段内匀速变化。该值为默认值]
    [ps: discrete=动画根据values和keyTimes属性，去掉过度动画，到了keyTimes的某个节点，属性值直接变为values对应数值。]
    [ps: spline=需要配合keySplines属性，设置每个时间段内的三次贝塞尔变化曲线。]

>-- <set> 元素，可以设置属性变化
   1. 不需要from属性，起始状态即为父节点属性值。
   2. 一到begin属性设置的时点，指定的attributeName属性值即改为to指定的属性值，没有过度动画。
   3. attributeName可以是属性值非数字的属性，如style="visibility: hidden;"
>-- <animateTransform> 动画元素 [实现transform属性改变的动画]
    attributeName [transform]
    type [translate,scale,rotate,skewX,skewY]
    additive 累计属性 [replace|sum]
    [ps: replace=动画直接没有关联关系，各自动画。为默认]
    [ps: sum=动画直接有关联关系，之前元素动画结束，在此基础上在此根据新的动画开始，累计动画效果]
>-- <animateMotion> 功能更加强大。可以让父元素沿着指定的路径运动！直线路径可以简单使用from + to属性来指定起点和终点
    from + to 动画行程
    path 动画路径 [可以指定路径，详情见 ./svg/animateMotion]







