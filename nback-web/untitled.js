/***************** 
 * Untitled *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instRoutineBegin());
flowScheduler.add(instRoutineEachFrame());
flowScheduler.add(instRoutineEnd());
flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
flowScheduler.add(inst2RoutineBegin());
flowScheduler.add(inst2RoutineEachFrame());
flowScheduler.add(inst2RoutineEnd());
flowScheduler.add(startRoutineBegin());
flowScheduler.add(startRoutineEachFrame());
flowScheduler.add(startRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(instRoutineBegin());
flowScheduler.add(instRoutineEachFrame());
flowScheduler.add(instRoutineEnd());
flowScheduler.add(restRoutineBegin());
flowScheduler.add(restRoutineEachFrame());
flowScheduler.add(restRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instClock;
var text;
var restClock;
var polygon;
var inst2Clock;
var text_3;
var key_resp;
var startClock;
var text3;
var text2;
var text1;
var startmsg;
var nongame_taskClock;
var number_list;
var pos;
var checklist_number;
var checklist_pos;
var answer_checklist;
var key_3;
var matrix_ur_3;
var matrix_ul_3;
var matrix_dr_3;
var matrix_dl_3;
var circle_2;
var thanksClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "inst"
  instClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Rest for 2 minutes.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[100, 100],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "inst2"
  inst2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'This is \'2-back\' \ncondition\n\nPlease enter \'1\', \nif the target is same \nto the target n before\n\nPlease enter \'Q\', \nif the target is "not" same \nto the target n before\n\nif you can understand, please press the space key.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 36.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "start"
  startClock = new util.Clock();
  text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  startmsg = new visual.TextStim({
    win: psychoJS.window,
    name: 'startmsg',
    text: 'START',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "nongame_task"
  nongame_taskClock = new util.Clock();
  // Run 'Begin Experiment' code from training_code_3
  number_list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  pos = [[50, (- 50)], [150, (- 50)], [(- 50), (- 50)], [(- 150), (- 50)], [50, (- 150)], [150, (- 150)], [(- 50), (- 150)], [(- 150), (- 150)], [50, 50], [150, 50], [(- 50), 50], [(- 150), 50], [50, 150], [150, 150], [(- 50), 150], [(- 150), 150]];
  checklist_number = [];
  checklist_pos = [];
  answer_checklist = [];
  
  key_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  matrix_ur_3 = new visual.Rect ({
    win: psychoJS.window, name: 'matrix_ur_3', 
    width: [100, 100][0], height: [100, 100][1],
    ori: 0, 
    pos: [50, 50], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -2, 
    interpolate: true, 
  });
  
  matrix_ul_3 = new visual.Rect ({
    win: psychoJS.window, name: 'matrix_ul_3', 
    width: [100, 100][0], height: [100, 100][1],
    ori: 0, 
    pos: [(- 50), 50], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -3, 
    interpolate: true, 
  });
  
  matrix_dr_3 = new visual.Rect ({
    win: psychoJS.window, name: 'matrix_dr_3', 
    width: [100, 100][0], height: [100, 100][1],
    ori: 0, 
    pos: [50, (- 50)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -4, 
    interpolate: true, 
  });
  
  matrix_dl_3 = new visual.Rect ({
    win: psychoJS.window, name: 'matrix_dl_3', 
    width: [100, 100][0], height: [100, 100][1],
    ori: 0, 
    pos: [(- 50), (- 50)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1, 
    depth: -5, 
    interpolate: true, 
  });
  
  circle_2 = new visual.Rect ({
    win: psychoJS.window, name: 'circle_2', 
    width: [100, 100][0], height: [100, 100][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color([0.8353, (- 0.2078), (- 0.9373)]), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'THANK YOU !',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 100.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instMaxDurationReached;
var instMaxDuration;
var instComponents;
function instRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    instMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('inst.started', globalClock.getTime());
    instMaxDuration = null
    // keep track of which components have finished
    instComponents = [];
    instComponents.push(text);
    
    for (const thisComponent of instComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function instRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst' ---
    // get current time
    t = instClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst' ---
    for (const thisComponent of instComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst.stopped', globalClock.getTime());
    if (instMaxDurationReached) {
        instClock.add(instMaxDuration);
    } else {
        instClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var restMaxDurationReached;
var restMaxDuration;
var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    restClock.reset(routineTimer.getTime());
    routineTimer.add(12.000000);
    restMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    /* Syntax Error: Fix Python code */
    psychoJS.experiment.addData('rest.started', globalClock.getTime());
    restMaxDuration = null
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(polygon);
    
    for (const thisComponent of restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest' ---
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 12 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest' ---
    for (const thisComponent of restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
    if (restMaxDurationReached) {
        restClock.add(restMaxDuration);
    } else {
        restClock.add(12.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var inst2MaxDurationReached;
var _key_resp_allKeys;
var inst2MaxDuration;
var inst2Components;
function inst2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inst2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    inst2Clock.reset();
    routineTimer.reset();
    inst2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('inst2.started', globalClock.getTime());
    inst2MaxDuration = null
    // keep track of which components have finished
    inst2Components = [];
    inst2Components.push(text_3);
    inst2Components.push(key_resp);
    
    for (const thisComponent of inst2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function inst2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inst2' ---
    // get current time
    t = inst2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of inst2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function inst2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inst2' ---
    for (const thisComponent of inst2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('inst2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "inst2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var startMaxDurationReached;
var startMaxDuration;
var startComponents;
function startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    startClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    startMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('start.started', globalClock.getTime());
    startMaxDuration = null
    // keep track of which components have finished
    startComponents = [];
    startComponents.push(text3);
    startComponents.push(text2);
    startComponents.push(text1);
    startComponents.push(startmsg);
    
    for (const thisComponent of startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start' ---
    // get current time
    t = startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text3* updates
    if (t >= 0.0 && text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text3.tStart = t;  // (not accounting for frame time here)
      text3.frameNStart = frameN;  // exact frame index
      
      text3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text3.setAutoDraw(false);
    }
    
    
    // *text2* updates
    if (t >= 1.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text2.setAutoDraw(false);
    }
    
    
    // *text1* updates
    if (t >= 2.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1.tStart = t;  // (not accounting for frame time here)
      text1.frameNStart = frameN;  // exact frame index
      
      text1.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text1.setAutoDraw(false);
    }
    
    
    // *startmsg* updates
    if (t >= 3.0 && startmsg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startmsg.tStart = t;  // (not accounting for frame time here)
      startmsg.frameNStart = frameN;  // exact frame index
      
      startmsg.setAutoDraw(true);
    }
    
    frameRemains = 3.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (startmsg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      startmsg.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start' ---
    for (const thisComponent of startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('start.stopped', globalClock.getTime());
    if (startMaxDurationReached) {
        startClock.add(startMaxDuration);
    } else {
        startClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: total_trials, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(nongame_taskRoutineBegin(snapshot));
      trialsLoopScheduler.add(nongame_taskRoutineEachFrame());
      trialsLoopScheduler.add(nongame_taskRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var nongame_taskMaxDurationReached;
var _key_3_allKeys;
var nongame_taskMaxDuration;
var nongame_taskComponents;
function nongame_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nongame_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nongame_taskClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    nongame_taskMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from training_code_3
    shuffle(number_list);
    shuffle(pos);
    checklist_number.append(number_list[0]);
    checklist_pos.append(pos[0]);
    
    key_3.keys = undefined;
    key_3.rt = undefined;
    _key_3_allKeys = [];
    circle_2.setPos(pos_choiced[0]);
    psychoJS.experiment.addData('nongame_task.started', globalClock.getTime());
    nongame_taskMaxDuration = null
    // keep track of which components have finished
    nongame_taskComponents = [];
    nongame_taskComponents.push(key_3);
    nongame_taskComponents.push(matrix_ur_3);
    nongame_taskComponents.push(matrix_ul_3);
    nongame_taskComponents.push(matrix_dr_3);
    nongame_taskComponents.push(matrix_dl_3);
    nongame_taskComponents.push(circle_2);
    
    for (const thisComponent of nongame_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function nongame_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nongame_task' ---
    // get current time
    t = nongame_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_3* updates
    if (t >= 0.0 && key_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_3.tStart = t;  // (not accounting for frame time here)
      key_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_3.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_3.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_3.getKeys({keyList: ['1', 'q'], waitRelease: false});
      _key_3_allKeys = _key_3_allKeys.concat(theseKeys);
      if (_key_3_allKeys.length > 0) {
        key_3.keys = _key_3_allKeys[_key_3_allKeys.length - 1].name;  // just the last key pressed
        key_3.rt = _key_3_allKeys[_key_3_allKeys.length - 1].rt;
        key_3.duration = _key_3_allKeys[_key_3_allKeys.length - 1].duration;
        // was this correct?
        if (key_3.keys == corr_ans2.slice((- 1))[0]) {
            key_3.corr = 1;
        } else {
            key_3.corr = 0;
        }
      }
    }
    
    
    // *matrix_ur_3* updates
    if (t >= 0.0 && matrix_ur_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      matrix_ur_3.tStart = t;  // (not accounting for frame time here)
      matrix_ur_3.frameNStart = frameN;  // exact frame index
      
      matrix_ur_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (matrix_ur_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      matrix_ur_3.setAutoDraw(false);
    }
    
    
    // *matrix_ul_3* updates
    if (t >= 0.0 && matrix_ul_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      matrix_ul_3.tStart = t;  // (not accounting for frame time here)
      matrix_ul_3.frameNStart = frameN;  // exact frame index
      
      matrix_ul_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (matrix_ul_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      matrix_ul_3.setAutoDraw(false);
    }
    
    
    // *matrix_dr_3* updates
    if (t >= 0.0 && matrix_dr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      matrix_dr_3.tStart = t;  // (not accounting for frame time here)
      matrix_dr_3.frameNStart = frameN;  // exact frame index
      
      matrix_dr_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (matrix_dr_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      matrix_dr_3.setAutoDraw(false);
    }
    
    
    // *matrix_dl_3* updates
    if (t >= 0.0 && matrix_dl_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      matrix_dl_3.tStart = t;  // (not accounting for frame time here)
      matrix_dl_3.frameNStart = frameN;  // exact frame index
      
      matrix_dl_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (matrix_dl_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      matrix_dl_3.setAutoDraw(false);
    }
    
    
    // *circle_2* updates
    if (t >= 0.0 && circle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_2.tStart = t;  // (not accounting for frame time here)
      circle_2.frameNStart = frameN;  // exact frame index
      
      circle_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (circle_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      circle_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of nongame_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nongame_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nongame_task' ---
    for (const thisComponent of nongame_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('nongame_task.stopped', globalClock.getTime());
    // Run 'End Routine' code from training_code_3
    if ((key_2.keys === "2")) {
        if (((checklist_number.slice((- 1))[0] === checklist_number.slice((- 3))[0]) && (checklist_pos.slice((- 1))[0] === checklist_pos.slice((- 3))[0]))) {
            answer_checklist.append("T");
        } else {
            answer_checklist.append("F");
        }
    } else {
        if ((key_2.keys === "1")) {
            if ((checklist_number.slice((- 1))[0] === checklist_number.slice((- 3))[0])) {
                answer_checklist.append("T");
            } else {
                answer_checklist.append("F");
            }
        } else {
            if ((key_2.keys === "3")) {
                if ((checklist_pos.slice((- 1))[0] === checklist_pos.slice((- 3))[0])) {
                    answer_checklist.append("T");
                } else {
                    answer_checklist.append("F");
                }
            } else {
                if ((key_2.keys === "space")) {
                    if (((checklist_pos.slice((- 1))[0] !== checklist_pos.slice((- 3))[0]) && (checklist_number.slice((- 1))[0] !== checklist_number.slice((- 3))[0]))) {
                        answer_checklist.append("T");
                    } else {
                        answer_checklist.append("F");
                    }
                }
            }
        }
    }
    
    // was no response the correct answer?!
    if (key_3.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans2.slice((- 1))[0])) {
         key_3.corr = 1;  // correct non-response
      } else {
         key_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_3.corr, level);
    }
    psychoJS.experiment.addData('key_3.keys', key_3.keys);
    psychoJS.experiment.addData('key_3.corr', key_3.corr);
    if (typeof key_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_3.rt', key_3.rt);
        psychoJS.experiment.addData('key_3.duration', key_3.duration);
        }
    
    key_3.stop();
    if (nongame_taskMaxDurationReached) {
        nongame_taskClock.add(nongame_taskMaxDuration);
    } else {
        nongame_taskClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text_2);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
