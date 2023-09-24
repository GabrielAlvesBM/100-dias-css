let bloco = document.getElementById('bloco')

let linha1 = document.getElementById('linha1')
let linha2 = document.getElementById('linha2')
let linha3 = document.getElementById('linha3')

bloco.addEventListener('click', function () {
    linha2.classList.remove('revAnimLinha2')
    linha1.classList.remove('revAnimLinha1')
    linha3.classList.remove('revAnimLinha3')

    linha1.classList.add('animLinha1')
    linha2.classList.add('animLinha2')
    linha3.classList.add('animLinha3')
})

linha1.addEventListener('click', function () {
    linha2.classList.remove('animLinha2')
    linha1.classList.remove('animLinha1')
    linha3.classList.remove('animLinha3')

    linha1.classList.add('revAnimLinha1')
    linha2.classList.add('revAnimLinha2')
    linha3.classList.add('revAnimLinha3')
})
