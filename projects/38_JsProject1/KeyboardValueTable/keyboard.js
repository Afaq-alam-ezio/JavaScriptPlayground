let contentSection = document.querySelector(".project");

window.addEventListener('keydown', (e)=>{

    contentSection.innerHTML = `
    
    <table>

    <tr>
        <th>key</th>
        <th>keycode</th>
        <th>code</th>
    </tr>

    <tr>
        <th>${e.key === " " ? "space" : e.key}</td>
        <th>${e.keycode}</td>
        <th>${e.code}</td>
    </tr>
    </table>
    
    `
}, false);