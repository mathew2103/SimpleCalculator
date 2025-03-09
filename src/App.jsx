import { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { AwesomeButton } from 'react-awesome-button';
import Typed from 'typed.js';
import ReactPlayer from 'react-player/youtube'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import 'react-awesome-button/dist/styles.css';
import './App.css'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const mathInsults = [
  "Aiyah… even calculator give up on you!",
  "You bring dishonor to abacus. Even stick counting too hard for you?",
  "I ask you simple math, and you give me headache. Why?",
  "You think Pythagoras cry in grave because of you? Yes. Yes, he does.",
  "Even noodle has more backbone than your logic.",
  "If 1+1 too hard, maybe you should go back to kindergarten. But even those kids smarter than you.",
  "How you make my IQ drop just by watching you think?",
  "Your brain run on Windows 95, need upgrade ASAP.",
  "Even chopsticks more useful than your problem-solving skills.",
  "I ask you math, not ask you to rewrite history with wrong answer.",
  "Your brain slower than dial-up internet. Even snail finish race before you solve 2+2.",
  "Aiyah… I thought you were bad at math, but I didn’t know you were ALLERGIC to numbers.",
  "Even fortune cookie gives better answer than you.",
  "You bring shame to your ancestors. Even your great-great-grandfather in heaven shaking his head.",
  "If I give you an abacus, you still count with fingers, huh?",
  "Your logic so bad, even Google AutoCorrect refuses to help you.",
  "At this rate, even AI refusing to tutor you. ChatGPT about to self-destruct.",
  "I told your teacher to be patient, but even she thinking of early retirement.",
  "Your brain got too much empty space. NASA should rent it out for rocket tests.",
  "I thought you studying math. Why you studying how to fail instead?",
  "Even a broken clock is right twice a day. You? Never.",
  "Pi has infinite digits, but you can't even count to ten.",
  "Your brain like Wi-Fi signal in basement. Weak and unreliable.",
  "I ask for answer, not abstract art.",
  "Your math so bad, even your shadow distance itself from you.",
  "Even my goldfish can multiply faster than you.",
  "Your logic so bad, even aliens won’t abduct you.",
  "I see numbers on paper, but you see hieroglyphics?",
  "Even my grandma solve Sudoku faster than you do addition.",
  "I ask for calculation, you give me creative writing.",
  "Your mental math is so slow, even Excel crashes waiting for you.",
  "I tell you to solve math, not start a guessing game.",
  "Even Google Translate can’t understand your logic.",
  "Your brain buffering like bad YouTube connection.",
  "If thinking was a sport, you’d be on the bench.",
  "Your numbers are so wrong, even parallel lines meet out of shame.",
  "If numbers were food, you’d still be starving.",
  "Even a turtle finish solving before you start reading the question.",
  "I see you doing math… or trying to perform black magic?",
  "Your math skills are like my phone battery—dying fast.",
  "I ask for one equation, you give me one disappointment.",
  "Even my pet rock is better at calculations.",
  "Your math grade is a negative number at this point.",
  "You solve problems like Windows updates—slow and painful.",
  "If I had a dollar for every wrong answer you gave, I'd retire early.",
  "You do math like you're playing Minesweeper—random and dangerous.",
  "Even a kindergartener doing finger math faster than you.",
  "Your math so bad, even AI refuses to process your inputs.",
  "The only sum you understand is 'somehow I failed'.",
  "I ask you to solve for X, and you solve for disappointment.",
  "Math is about solutions, but you only provide problems.",
  "Even my microwave does math faster than you.",
  "If numbers were martial arts, you'd get knocked out in round one.",
  "Your problem-solving skills make me problem-questioning life.",
  "You treat numbers like your ex—completely ignore them.",
  "Even Siri stopped responding to your math questions.",
  "Your math so bad, even teachers use you as a bad example.",
  "You struggling with 2+2? Time to uninstall brain and reinstall.",
  "Your math logic is like expired milk—completely off.",
  "You do math like a cooking show—lot of drama, no result.",
  "You add numbers like my grandma adds spices—random and unnecessary.",
  "Even my cat accidentally stepped on a calculator and got a better answer.",
  "Your brain doing calculations like a potato running a marathon.",
  "Even 404 errors make more sense than your equations.",
  "Your numbers are so far off, even a GPS can’t find them.",
  "Your math skills make my Wi-Fi lag out of frustration.",
  "If math had a sound, your answers would be white noise.",
  "Even your shadow walks away when you try to calculate something.",
  "Your numbers are so wrong, even imaginary numbers reject them.",
  "Trying to explain math to you is like trying to teach a fish how to drive.",
  "I would say 'Do better', but at this point, just stop.",
  "If logic was water, your brain would be a desert.",
  "Your answer is so bad, even the back of the textbook caught on fire.",
  "You solve math like you're negotiating a hostage situation—complete panic.",
  "If common sense was a currency, you'd be in debt.",
  "I thought math was universal, but clearly, you're the exception.",
  "Even a Rubik’s cube is easier to solve than your logic.",
  "I ask you a math question, and you give me an existential crisis.",
  "The only function you understand is 'malfunction'.",
  "Even a pigeon playing chess has better strategy than you solving for X.",
  "Your math is so tragic, even Shakespeare couldn’t write about it.",
  "You make even infinity look like a small number.",
  "The quadratic formula is less complicated than your thought process.",
  "Your calculations make Flat Earth theory sound reasonable.",
  "If you were in charge of numbers, we'd have a financial crisis every day.",
  "Even cavemen used sticks to count better than you.",
  "If you were a calculator, your only button would be 'Error'.",
  "Your math is so bad, even the number zero is ashamed.",
  "If logic had a weight limit, yours would be under 10 pounds.",
  "Your equations have more plot holes than a bad movie.",
  "I ask for a solution, you give me a novel with no ending.",
  "You take so long to calculate, even time zones change.",
  "Even Morse code makes more sense than your math answers.",
  "Your brain is solving at 2 FPS—lagging in real life.",
  "I thought you were bad at numbers, but you're bad at words too—because 'correct' is not in your vocabulary.",
  "You do math like you're throwing darts in the dark—random and dangerous.",
  "Even Wikipedia doesn't want to auto-fill your answer.",
  "If your math skills were a game, it would be on hard mode with no tutorial."
];




function App() {
  const [selecting, setSelecting] = useState(true);
  const [op1, setop1] = useState(0);
  const [operator, setOperator] = useState("");
  const [op2, setOp2] = useState(0);
  const [intervalId, setIntervalId] = useState(0)
  const [pageId, setPageId] = useState(0);
  const [played, setPlayed] = useState(false);
  const [opInput, setOpInput] = useState('');
  const [paused, setPaused] = useState(false);
  const [durationWatched, setDurationWatched] = useState(0);
  const [muted, setMuted] = useState(true);
  const [showProgress, setShowProgress] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [resultInput, setResultInput] = useState(0);
  const [visibleResult, setVisibleResult] = useState("??");
  const [finalSubmitMess, setFinalSubmitMess] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const r = useRef(null);
  const display = ["op1", "op", "op2", "equals", "result"]
  const operations = ["add", "subtract", "multiply", "divide", "addition", "subtraction", "multiplication", "division"]



  function opClick() {
    if (operations.find(e => e == opInput) == undefined) return alert("Thats not even an operation. (Only supports +, -, *, /)");
    setPlayed(false);
    const opInputBox = document.getElementById("opInput");
    opInputBox.disabled = true;

    const typed = new Typed('.element', {
      strings: ["You thought I would let you choose so easily?", "Now Godric's Hat shall decide!", "Deciding..."],
      typeSpeed: 30,
      backSpeed: 60,
      onComplete: () => {
        setTimeout(() => {

          const operationsTable = [
            { text: "ADDING", op: '+' },
            { text: "SUBTRACTING", op: '-' },
            { text: "MULTIPLYING", op: '*' },
            { text: "DIVIDING", op: '/' }
          ];
          const operation = operationsTable[Math.floor(Math.random() * operationsTable.length)];
          
          const typed2 = new Typed('.element', {
            strings: [`Alright! We are ${operation.text.toUpperCase()}`],
            typeSpeed: 10,
            onComplete: () => {
              setTimeout(() => {
                updatePage()
              }, 3000)
            }
          })
          setOperator(operation.op);
          typed.destroy()


        }, 5000)

      }

    });
  }
  function updatePage() {
    
    
    if (pageId < 2) {
      const page = document.getElementById(`page${pageId}`);
      const opDisplay = document.getElementById(display[pageId]);
      opDisplay.className = "p-0.5 bg-neutral-600 rounded-sm text-neutral-400"
      const newOpDisplay = document.getElementById(display[pageId + 1]);
      newOpDisplay.className = "p-1 bg-neutral-600 rounded-sm shadow-md shadow-emerald-500 shadow-offset-0 text-neutral-100 text-5xl";
    } else {
      display.forEach(d => {
        
        if (d != "result") {

          const display = document.getElementById(d);
          display.className = "p-0.5 bg-neutral-600 rounded-sm text-neutral-100";
        }

      })
      setSelecting(false);
    }

    // page.style.display = 'none';

    setPageId(pageId + 1);
  }

  function handleOp1Counter() {
    if (intervalId == 0) {
      setPlayed(false);
      let i = 0;
      setIntervalId(setInterval(() => {
        setop1(i + 1)
        i++
      }, 20))

    } else {
      clearInterval(intervalId)
      setPlayed(true);
      setIntervalId(0)
    }


  }

  function op2Click() {
    updatePage()
    setPaused(true);
    r.current.playing = false;
  }

  function findResult() {
    switch (operator) {
      case "+":
        return parseFloat(op1) + parseFloat(op2);
      case "-":
        return parseFloat(op1) - parseFloat(op2);
      case "*":
        return parseFloat(op1) * parseFloat(op2);
      case "/":
        return parseFloat(op1) / parseFloat(op2);
    }
  }

  const funcs = [updatePage, opClick, op2Click];
  const [nextBInterval, setNextBInterval] = useState(0);
  const randomPos = (p = "next") => {
    
    
    const nextB = document.getElementById(p);
    
    nextB.style.position = 'absolute';
    nextB.style.top = `${Math.floor(Math.random() * 100)}%`;
    nextB.style.left = `${Math.floor(Math.random() * 100)}%`;
    nextB.style.transition = 'all 0.05s ease-in-out';
    nextB.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

  }


  const moveHead = () => {
    const head = document.getElementById('head');
    const container = document.querySelector('.container');
    let x = 1;
    let y = 1;
    let posX = 0;
    let posY = 0;

    const move = () => {
      const headRect = head.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (headRect.right >= containerRect.right || headRect.left <= containerRect.left) x = -x;
      if (headRect.bottom >= containerRect.bottom || headRect.top <= containerRect.top) y = -y;

      posX += x;
      posY += y;
      head.style.transform = `translate(${posX}px, ${posY}px)`;
    };

    const interval = setInterval(move, 10);
    return () => clearInterval(interval);
  }
  useEffect(() => {

    if (played) {
      randomPos()
      clearInterval(nextBInterval);
       setNextBInterval(setInterval(randomPos, 530 - 30*pageId ));
    } else {
      // defPos()
      // clearInterval(nextBInterval)
    }
  }, [played])

  useEffect(() => {
    const checkbox = document.getElementById('check');

    checkbox.addEventListener('change', function () {
      setShowProgress(checkbox.checked);
      setTimeout(() => {
        if (checkbox.checked) {
          setOpenModal(true)
        }
      }, 5000)
    });

  })

  return (
    <>
      <div className='container bg-neutral-200 h-150 rounded-4xl p-4 flex flex-col items-center gap-10 relative'>
        <div className='flex flex-col justify-around gap-5 z-1 pl-5 pr-5'>
          <div id="head" className='absolute top-5 left-5 z-100'>
            <p className='text-2xl font-bold text-neutral-600'>Simple Calculator.</p>
            <p className='text-sm text-neutral-500 italic'>What could go wrong?</p>
          </div>


          <div className='pl-3 pr-3 mt-15 gap-3 calculation bg-black h-20 rounded-lg flex items-center justify-around text-4xl'>
            <div className="p-1 bg-neutral-600 rounded-sm shadow-md shadow-emerald-500 shadow-offset-0" id='op1'>
              <p className='font-bold text-center' id='op1Content'>{op1}</p>
            </div>
            <div className="bg-neutral-600 rounded-sm text-neutral-500" id="op">
              <p className='font-bold text-center' id="opContent">{operator || "+"}</p>
            </div>
            <div className=" bg-neutral-600 rounded-sm text-neutral-500" id="op2">
              <p className='font-bold text-center' id="op2Content">{op2}</p>
            </div>
            <div className=" bg-neutral-600 rounded-sm text-neutral-500" id="equals">
              <p className='font-bold text-center '>=</p>
            </div>
            <div className=" bg-neutral-600 rounded-sm text-neutral-500" id="result">
              <p className='font-bold text-center' id="resultContent">{visibleResult}</p>
            </div>

          </div>
          <div className='pl-45' hidden={pageId == 0}>
          <AwesomeButton onPress={() => {location.reload()}}><BackspaceOutlinedIcon fontSize='small'/></AwesomeButton>
          </div>
        </div>

        <div className="" hidden={!selecting}>
          <div className='pages'>

            <div className="flex items-center flex-col" id='page0' hidden={pageId != 0}>
              <p className='text-neutral-500'>Select First Operand</p>
              <AwesomeButton type={intervalId == 0 ? "primary" : "danger"} onPress={handleOp1Counter}>{intervalId == 0 ? "Press ME" : "Stop"}</AwesomeButton>
            </div>


            <div className="flex items-center flex-col" id='page1' hidden={pageId != 1}>
              <TextField
                id="opInput"
                label="Operation?"
                value={opInput}
                variant="outlined"
                InputProps={{ style: { color: 'black' } }}
                onChange={(e) => {
                  const value = e.target.value.toLowerCase();
                  if(value == "+" || value == "-" || value == "*" || value == "/"){
                    alert("Invalid Character. Use words instead. (Addition, Subtraction..)")
                  }
                  if (/^[a-zA-Z]*$/.test(value)) {
                    setOpInput(value);
                  }
                }}
              />
              <div className='flex'> <div className="element text-black"></div></div>
            </div>

            <div className="flex items-center flex-col" id='page2' hidden={pageId != 2}>
              <p className='text-black'>Pause at the timestamp you want for 2nd operand<br/>(Click/Tap on the video to pause/play)</p>
              {/* <ReactPlayer url='https://www.youtube.com/watch?v=rTgj1HxmUbg' muted={true} volume={0} playing width={250} height={150}  controls={false} /> */}
              {/* onStart={() => {
              setTimeout(() => {
                // setMuted(false);
              }, 300)
            }} */}
              <ReactPlayer
                onStart={() => {
                  setTimeout(() => {
                    setMuted(false);
                  }, 500);
                }}
                playing={pageId == 2 && !paused}
                url="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                width="100%"

                height="28vh"
                muted={muted}
                controls={false}
                onProgress={(p) => {
                  if(pageId == 2){
                    setDurationWatched(p.playedSeconds.toFixed(2));
                  setOp2(p.playedSeconds.toFixed(2));
                  }
                  
                }}
                onPause={() => {
                  setPlayed(true);
                }}
                onPlay={() => {
                  setPlayed(false)
                }}
                ref={r}
                />
                <p className='text-black inline'>{durationWatched}</p>
                {/* <AwesomeButton onPress={() => { setPaused(true) }}>Pause</AwesomeButton> */}
              <AwesomeButton type={"danger"} onPress={() => {location.reload()}}>Reset</AwesomeButton>
              <div className='flex'> <div className="element text-black"></div></div>
            </div>


          </div>
          <div id="next" className='z-0'>
            <AwesomeButton disabled={!played} onPress={() => {
              setShowLoading(true)
              setPlayed(false)
              setProgressValue(1)
              setTimeout(() => {
                const randomNum = Math.floor(Math.random() * 64) + 4;
                setProgressValue(randomNum);
              }, 2.5*1000)
              setTimeout(() => {
                setProgressValue(69);
              }, 1*1000);
              setTimeout(() => {
                
                const randomNum = Math.floor(Math.random() * 14) + 55;

                setProgressValue(randomNum);
              }, 6.5*1000);
              
              setTimeout(() => {

                setProgressValue(99);
              }, 5.5*1000);

              setTimeout(() => {
                setPlayed(true)
                setShowLoading(false)

                funcs[pageId]();
              }, 9.5*1000)
            }} className='absolute'>Next</AwesomeButton>
          </div>
          
        </div>


        <div hidden={selecting}>
          <div className='bg-neutral-800 mt-10 flex p-5 gap-5 text-sm' id="verifying">
            <input type="checkbox" id="check" hidden={showProgress} />
            <CircularProgress size={25} hidden={!showProgress} /> <p>Verify you're not a robot</p>

            <div hidden={!openModal} className='absolute top-50 left-5 border-4 border-black shadow-2xl shadow-black'>
              <div className='flex justify-center items-center flex-col bg-amber-50 text-neutral-600 p-4 '>
                <p>Solve the following question: <br />(Round off to 2 decimal places)</p>
                <p>{op1}{operator}{op2}</p>
                <TextField
                  id="opInput"
                  label="Result?"
                  value={resultInput}
                  variant="outlined"
                  InputProps={{ style: { color: 'black' } }}
                  onChange={(e) => {
                    const value = e.target.value;
                    setResultInput(value);
                    if(finalSubmitMess == false){
                      setFinalSubmitMess(true)
                      setInterval(() => {randomPos("finalSubmit")}, 500)
                    }
                    
                  }}
                />
                <div id="finalSubmit">
                <AwesomeButton onPress={() => {
                   const value = resultInput;
                    if (parseFloat(value) == findResult().toFixed(2)) {
                      // alert("Correct!")
                      setOpenModal(false)
                      
                      const verifying = document.getElementById("verifying");
                      verifying.hidden = true;
                        setVisibleResult(`${findResult().toFixed(2)}`);
                      display.forEach(d => {
                        const display = document.getElementById(d);
                          display.className = `p-0.5 rounded-sm text-neutral-100 ${d== "result" ? "text-md" : ""}`;
                
                      })
                      moveHead();
                      setShowLoading(true);
                      setInterval(() => {
                        setProgressValue(Math.floor(Math.random() * 100));
                      }, 1000);
                    } else {
                      alert(`WRONG! ${mathInsults[Math.floor(Math.random() * mathInsults.length)]}`)
                    }
                  
                }} >Submit</AwesomeButton>
                
                {/*   */}
                </div>
                

                  


              </div>

            </div>
            
          </div>
          <div hidden={visibleResult == "??"}>
            <p className='text-neutral-600'>Thanks for using Simple Calculator.</p>
            <AwesomeButton type={"secondary"} onPress={() => {location.reload()}} >Reset</AwesomeButton>

            </div>
        </div>
        <div className="loadingScreen" hidden={!showLoading}>
            {/* <CircularProgress variant="determinate" value={progressValue} hidden={!showLoading} /> */}
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={progressValue} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >{`${progressValue}%`}</Typography>
      </Box>
    </Box>
          </div>

      </div>
    </>
  )
}

export default App
