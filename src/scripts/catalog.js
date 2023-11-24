const genarateCatalog = function() {
  const titleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const els = document.querySelectorAll(titleTags.toString());
  if (els === undefined || els === null || els.length === 0) {
      return;
  }

  // 创建目录盒子
  let $ul = document.createElement('ul');
  $ul.className = "catalogbox";

  let index = 0;     // 目录的下标
  let liList = [];
  for (const item of els) {
      // const title = item.innerHTML;
      let id = `catalog_${index++}`;
      item.setAttribute("id", id);

      const tagName = item.nodeName.toLowerCase();
      let level = Number(tagName.slice(-1));

      // 获取 h 标签的内容
      let text = item.innerHTML.replace(/<\/?[^>]+>/g, '')
      // 生成 li 元素，需要绑定h 的id，以便于点击目录时可以找到对应的 h 标签
      let $li = document.createElement('li');
      $li.setAttribute("catalog", id);
      $li.setAttribute("style", '--level:' + level);
      $li.innerHTML = text;
      liList.push($li);
      $ul.append($li);
  }

  // 点击目录滚动到对应区域
  for (let item of liList) {
      item.addEventListener('click', function () {
          // 获取每个li 上绑定的catalog值，对应着唯一的 h 标签
          let id = item.getAttribute('catalog')
          let tarEl = document.querySelector(`#${id}`);
          tarEl.scrollIntoView({ behavior: 'auto' });

          // 加动画效果
          let animation = () => {
              tarEl.classList.add('catalog-active');
              setTimeout(() => {
                  tarEl.classList.remove('catalog-active');
              }, 500);
          }

          animation();
      })
  }

  // 目录跟随滚动高亮
  window.addEventListener('scroll', function() {
      // 获取浏览器滚动条距离顶部的高度
      let scroll = document.documentElement.scrollTop || document.body.scrollTop
      for (let i = els.length - 1; i >= 0 ; i--) {
          // 倒叙遍历所有的 h 标签，如果滚动条的 scrollTop 刚刚大于 h 区域的 offsetTop，
          // 将此h 标签对应的 目录 设置为高亮
          if (parseInt(scroll) >= Math.ceil(els[i].offsetTop) ) {
              let id = els[i].getAttribute("id")
              for (let item of liList) {
                  if (item.getAttribute('catalog') === id) {
                      item.classList.add('catalog-active')
                  } else {
                      item.classList.remove('catalog-active')
                  }
              }
              break ;
          }
      }
  })
  return $ul;
}

// 生成头部
const genarateHeader = function(element) {
  const $header = document.createElement("div");
  $header.className = "header";

  const $title = document.createElement('span');
  $title.innerText = "目录";

  const $button = document.createElement("span");
  $button.className = 'button';
  $button.innerText = "<<";

  let isHide = false;
  $button.addEventListener('click', () => {
      isHide = !isHide;
      if (isHide) {
          element.classList.add('hide');
          $title.classList.add('hide');
          $button.innerText = ">>";
      } else {
          $title.classList.remove('hide');
          element.classList.remove('hide');
          $button.innerText = "<<";
      }
  })

  $header.append($button);
  $header.append($title);

  return $header;
}

// 生成整个目录的元素：包含头部 和 目录两部分
const genarateCatalogBox = function() {
  const $box = document.createElement("div");
  $box.className = "catalog-wrap";
  let $catalog = genarateCatalog();
  if ($catalog === undefined) {
      return;
  }

  $box.append(genarateHeader($catalog));
  $box.append($catalog);
  return $box;
}

// 生成目录并把它挂载到页面上
let box = genarateCatalogBox();
if (box) document.body.append(box);