

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    const dragid = e.target.id  // stores the id of selected item
    document.getElementById(dragid).style.border = "thick solid #0000FF";  // this indicates which image is selected
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));   // adding the dragged content to the div
   
    document.getElementById(data).style.border = "1px solid brown"; 
    const toast = document.createElement('div')   
    toast.innerHTML=`<p> ${data} Item successfully added to ${ev.target.id} !!!</p>`  // this statement displays in the toast section if items are dropped successfully
    document.getElementById('toast').appendChild(toast) 
    
    setTimeout(()=>{ document.getElementById('toast').innerHTML=''}, 7000) // this function is used to clear the toast section
  }

  function allowDrop(event) {
    if(event.target.id === "box1" || event.target.id === "box2") // this condition makes only box1 and box2 divs able to recieve the dragged item
    event.preventDefault();
  }
  
  function reset(event){
    const box2 = document.getElementById('box2')
    const box1 = document.getElementById('box1')
    box2.innerHTML=''
   
    box1.innerHTML = ' <div class="draggable" draggable="true" ondragstart="drag(event)" id="cars">Cars</div> <img src="./img.jpg" alt="image" width="100" height="100" id="image" draggable="true" ondragstart="drag(event)"> <div class="draggable" draggable="true" ondragstart="drag(event)" id="function">const var =>{console.log("Hi world")}</div> <div class="draggable" draggable="true" ondragstart="drag(event)" id="emoji">&#128512; &#128516;</div>'
    const toast = document.createElement('div')

    document.getElementById('toast').innerHTML=''
    toast.innerHTML='<p>The boxes are Reset !!!</p>'
    document.getElementById('toast').appendChild(toast)

    
  }