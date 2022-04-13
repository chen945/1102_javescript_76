const o='o';
const x='x';
let turn=0;
let done=false;

const resetBtn = document.querySelector("#reset");//要加#字號搜尋HTML ID


const allLi = document.querySelectorAll('#board li');
console.log('board li',allLi);

const container = document.querySelector('#container')

//設定獲勝條件

const checkWin =(player)=>{
    let p=[];
    allLi.forEach((li)=>{
        p.push(li.classList.contains(player))
    });
    console.log('p',p);

    const [p1,p2,p3,p4,p5,p6,p7,p8,p9]=p;

    if(
        (p1&&p2&&p3)||
        (p4&&p5&&p6)||
        (p7&&p8&&p9)||
        (p1&&p4&&p7)||
        (p2&&p5&&p8)||
        (p3&&p6&&p9)||
        (p1&&p5&&p9)||
        (p3&&p5&&p7)
    )
        return true;
    else
        return false;

}

//設定RESET 恢復原本的值及背景
const reset = () =>{
    
    allLi.forEach((li) =>{
        li.textContent = '+';
        li.classList = '';
    });
    container.style.backgroundColor =('rgba(104, 99, 99)')
    turn=0;
    done=false;
}

const winMessage=(player)=>{
    container.style.backgroundColor =(player==='o'?'rgba(144,238,144,0.5)'/*獲勝者為o時背景為綠色*/ : /*否則為紅色*/ 'rgba(240, 118, 128, 0.726)')

    alert(`player ${player} wins`) //$在JS中表示變數
}

allLi.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.classList.contains('disable')){
            alert('already filled')

            //0%2=0就會跑出O
        }else if(turn%2===0){
            item.textContent='O';
            item.classList.add('o','disabled')
            if(checkWin(o)){
                //alert('Player O is WIner');
                winMessage(o);
                done=true;
                
            }
        
            //1%2=大於0 會跑出X

        }else if (turn%2===1){
            item.textContent='X';
            item.classList.add('x','disabled')
            if(checkWin(x)){
                //alert('Player X is WIner');
                winMessage(x);
                done=true;

            }
        }

        
        if(!done&&turn<8){
            turn++;

        
        }else if(!done&&turn>=8){
            alert('tie game');
            
        }
    });
});

resetBtn.addEventListener('click',reset);