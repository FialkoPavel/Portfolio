
let towerEl = document.querySelectorAll('.tower');
let diskEl = document.querySelectorAll('.disk');
let bottomEl = document.querySelectorAll('.tower-bottom');
let whichTowerClicked=[];
let towers = [];
let currTowerCenter = 0;

let disk = {
    dEl: null,
    /*    height: null,
        compStyle: null,
        width: null,*/
    getCompStyle: function() {
        this.compStyle = window.getComputedStyle(this.dEl);
    },
    setSize: function() {
        this.height = parseFloat(this.compStyle.getPropertyValue('height'));
        this.width = parseFloat(this.compStyle.getPropertyValue('width'));
    },
    getWidth: function() { return this.width   },
    setXY: function(x,y) {
        this.dEl.style.left = x;
        this.dEl.style.bottom = y;
    },
    show: function() {
        console.log(this.dEl);
        /*console.log(this.compStyle);*/
        console.log("height x width: "+this.height+' x '+this.width);
    }
};

let tower = {
    tEl: null,
    /*disks: [],
    center: null,
    compStyle: null,
    bottomEl: null,*/
    initDisks: function() {
        this.disks = [];
    },
    addDisk: function(disk) {
        this.disks.push(disk);
    },
    removeDisk: function() {
        return this.disks.pop();
    },
    setBottomEl: function(el) {
        this.bottomEl = el;
    },
    ifAllDisksHere: function() {
        return this.disks.length===diskEl.length;
    },
    getCompStyle: function() {
        this.compStyle = window.getComputedStyle(this.tEl);
    },
    getHighestPoint: function() {
        return this.disks.reduce(function(sum,item) {
            return sum + item.height;
        }, parseFloat(this.compStyle.getPropertyValue('margin-bottom')) + parseFloat(window.getComputedStyle(this.bottomEl).getPropertyValue('height')))+'px';
    },
    setCenter: function(num) { this.center = num },
    getCenter: function() {    return this.center;     },
    show: function() {
        console.log("Disks: "+this.disks.length);
        console.log("HighestPoint: "+this.getHighestPoint());
        console.log('Center: '+this.getCenter());
    },
    notEmpty: function () {
        return this.disks.length > 0;
    }
};

for (let i=0; i<towerEl.length; i++) {
    let newTower = Object.create(tower, {
        tEl: {value:towerEl[i]}
    });
    towers.push(newTower);

    newTower.initDisks();
    newTower.getCompStyle();
    newTower.setBottomEl(bottomEl[i]);

    // Left part of the tower
    console.log('currTowerCenter: '+currTowerCenter);
    console.log('margin-left: '+ parseFloat(newTower.compStyle.getPropertyValue('margin-left') ));
    console.log('width/2: '+parseFloat(newTower.compStyle.getPropertyValue('width'))/2);
    currTowerCenter = currTowerCenter + parseFloat(newTower.compStyle.getPropertyValue('margin-left') ) + parseFloat(newTower.compStyle.getPropertyValue('width'))/2;

    newTower.setCenter(currTowerCenter);

    // Right part of the tower
    currTowerCenter = currTowerCenter + parseFloat(newTower.compStyle.getPropertyValue('margin-right') ) + parseFloat(newTower.compStyle.getPropertyValue('width'))/2;

}

for (let i=diskEl.length-1; i>=0; i--) {
    let newDisk = Object.create(disk, {
        dEl: {value:diskEl[i]}
    });

    newDisk.getCompStyle();
    newDisk.setSize();
    newDisk.show();

    towers[0].addDisk(newDisk);
}

function afterClickOnTower() {
    let tNum = (this.classList.contains('zero')) ? 0 : (this.classList.contains('one')) ? 1 : 2;
    if (whichTowerClicked[0] !== tNum && (whichTowerClicked.length === 1 || whichTowerClicked.length === 0 && towers[tNum].notEmpty())) {
        whichTowerClicked.push(tNum);
        if (whichTowerClicked.length === 2) {
            moveDisk();
            whichTowerClicked = [];
        }
    }
}

towerEl[0].addEventListener('click', afterClickOnTower);
towerEl[1].addEventListener('click', afterClickOnTower);
towerEl[2].addEventListener('click', afterClickOnTower);

function moveDisk() {
    let diskToMove = towers[whichTowerClicked[0]].removeDisk();

    console.log((towers[whichTowerClicked[1]].getCenter()-diskToMove.getWidth()/2) + 'px');
    diskToMove.setXY ((towers[whichTowerClicked[1]].getCenter()-diskToMove.getWidth()/2) + 'px',towers[whichTowerClicked[1]].getHighestPoint());

    towers[whichTowerClicked[1]].addDisk(diskToMove);
    diskEl[0].style.bottom = '50px';


    /*if (whichTowerClicked[0]===0 && whichTowerClicked[1]===2) {
        diskEl[0].style.left = 10*5+250*2+125-40+'px';
        diskEl[0].style.bottom = '30px';
    } else if (whichTowerClicked[0]===2 && whichTowerClicked[1]===0) {
        diskEl[0].style.left = 10+125-40+'px';
        diskEl[0].style.bottom = '50px';
    }*/
}

// диски должны двигаться по правилам
// DONE - добавить возможность выбрать количество дисков
// определить что игрок закончил
// определить что игрок ошибся и перенес все диски на вторую башню
// добавить кнопку чтобы все обнулилось без перезагрузки страницы

let numberDiskThree = document.querySelector('.number-three');
let numberDiskFive = document.querySelector('.number-five');
let diskGreen = document.querySelector('.green');
let diskBlue = document.querySelector('.blue');
let diskDarkBlue = document.querySelector('.darkblue');
let diskBlack = document.querySelector('.black');

numberDiskThree.addEventListener('click', function () {
    if (numberDiskThree.classList.contains('number-three')) {
        diskGreen.style.display = 'none';
        diskBlue.style.display = 'none';
        diskDarkBlue.style.display = 'none';
        diskBlack.style.display = 'none';
    }
});

numberDiskFive.addEventListener('click', function () {
    if (numberDiskFive.classList.contains('number-five')) {
        diskDarkBlue.style.display = 'none';
        diskBlack.style.display = 'none';
    }
});

let btnStart = document.querySelector('.start-over');

btnStart.addEventListener('click', function () {
    // diskBlue.pop();
    // diskBlue.addDisk(towers[0]);
    // towers[0].addDisk(diskBlue);
    // let diskRemove = towers[1].removeDisk();
    // towers[0].addDisk(diskRemove);
});