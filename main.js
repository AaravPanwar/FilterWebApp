function setup()
{
    canvas = createCanvas(400, 400 );
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    model = ml5.poseNet(video, modelloaded );
    model.on("pose", showResult)
}

nosex = 0;
nosey = 0;

function showResult(result)
{
 console.log(result);

 nosex = result[0].pose.nose.x;
 nosey = result[0].pose.nose.y;
}

function modelloaded()
{
    console.log("PoseNet is linked");
}

function preload()
{
    crown = loadImage("crown.png");
    moustache = loadImage("moustache.png");
    cigarette = loadImage("cigarette.png");
    glasses = loadImage("glasses.png");
    chain = loadImage("chain.png");
}

function draw()
{
    image(video, 0, 0, 400, 400);

    uc = document.getElementById("dropdown").value;

    if(uc == "Clown Nose")
    {
        fill("red");
    stroke("black");
    circle(nosex - 163 , nosey - 50 , 30)
    }

    if(uc == "Moustache")
    {
        image(moustache, nosex - 190 , nosey - 40 , 60 , 30)
    }

    if(uc == "Crown")
    {
        image(crown, nosex - 220 , nosey - 270 , 120 , 120)
    }

    if(uc == "Thug Life")
    {
        image(cigarette , nosex - 160 , nosey - 8 , 50 , 60)
        image(glasses, nosex - 240 , nosey - 160 , 150 , 190)
        image(chain, nosex - 230 , nosey + 20  , 110 , 110)
    }
    
    
}

function takepic()
{
    save("realtimefilter.png");
}