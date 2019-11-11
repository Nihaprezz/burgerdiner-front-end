let list = document.querySelectorAll(".item");
    // hb = document.querySelector(".hamburger"),
    // targets = document.querySelectorAll(".target"),
    // links = document.querySelectorAll(".link"),
    // open = false;

// document.addEventListener('DOMContenLoaded', () => {
//     console.log('loading')
//     build();
// })

let buntop = document.querySelector('#bun_top')
buntop.addEventListener('click', build)

function build(){
    let z = 7;
    // this.style.position = 'relative';
    list.forEach(function() {
        event.target.style.zIndex = z;
        z--;
        this.addClass.setAttribute('id')
        debugger
    })
}


// build();

function explode_burger(){
    list.forEach(function(){
        let self = this;
        let id = this.setAttribute("id");

        un_hover_burger();
        setTimeout(function() {
            self.ClassList.add(id + '-explode')
        }, 300);
    })
}