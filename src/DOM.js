/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        document.body.insertAdjacentHTML(
            'beforeend',
            '<' + tag + '>' + content + '</' + tag + '>',
        );
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let div = document.createElement('div');
    div.className = 'item_1';
    let lev = 2;
    if (level >= lev) {
        for (let i = 0; i < childrenCount; i++) {
            div.insertAdjacentHTML(
                'beforeend',
                '<div class="item_' + lev + '"></div>',
            );
        }
    }
    for (lev; lev < level; lev++) {
        let mass = div.querySelectorAll('.item_' + lev);
        for (let i = 0; i < mass.length; i++) {
            for (let j = 0; j < childrenCount; j++) {
                mass[i].insertAdjacentHTML(
                    'beforeend',
                    '<div class="item_' + (lev + 1) + '"></div>',
                );
            }
        }
    }
    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let div = generateTree(2, 3);
    let ndiv = div.querySelectorAll('.item_2');
    for (let i = 0; i < ndiv.length; i++) {
        let section = document.createElement('section');
        section.className = 'item_2';
        section.innerHTML = ndiv[i].innerHTML;
        div.append(section);
        ndiv[i].remove();
    }
    return div;
}
