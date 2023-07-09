<h1> FCC - Drum Machine Documentation </h1>
Mobile First

<img src="https://github.com/suongfiori/React-drum-machine/blob/main/src/assets/mobile-first.png" alt="screenshot" width="20%" /> 

Desktop - Power On

<img src="https://github.com/suongfiori/React-drum-machine/blob/main/src/assets/desktop.png" alt="screenshot" width="50%" /> <be>

Desktop - Power Off

<img src="https://github.com/suongfiori/React-drum-machine/blob/main/src/assets/desktop-1.png" alt="screenshot" width="50%" />

## Table of Contents
1. Introduction
2. Installation and Setup
3. User Guide
4. Components
    - DisplayZone
    - DrumPad
    - ToggleBank
    - PowerButton
5. Drum Audio Data
6. Examples

## 1. Introduction
The Drum Machine is a simple web-based application I developed as a learning project to enhance my skills in React JS, Vite, and problem-solving. It provided me with an interactive platform to create and play drum patterns using a variety of audio samples. This documentation not only guides me through the installation, setup, and usage of the Drum Machine but also highlights the key learning outcomes I achieved during the project.

By working on this Drum Machine project, I gained valuable experience and knowledge in the following areas:

###React JS: I gained insights into React's component-based architecture, state management, and event handling.

###Vite: I learned how to set up a modern development environment using Vite, a fast and efficient build tool for web applications. I understood the benefits of using Vite for quick development iterations and optimized production builds.

###Problem-Solving: I encountered various challenges during the development process and applied problem-solving skills to overcome them. I understood the importance of breaking down complex tasks into smaller, manageable parts and employed logical thinking to devise effective solutions.

Throughout this documentation, you will find explanations, code snippets, and examples that demonstrate how these technologies and problem-solving approaches were utilized to create a functional and engaging Drum Machine.

## 2. Installation and Setup
To use the Drum Machine, follow these steps:

1. Clone the project repository from [GitHub](https://github.com/your-repo) or download the source code.
2. Install the required dependencies by running the command `npm install`.
3. Start the development server with `npm start`.
4. Open your web browser and access the Drum Machine at `http://localhost:3000` or the specified port.

## 3. User Guide
### Power and Volume Controls
- The power button toggles the power state of the Drum Machine. When turned off, the Drum Machine is disabled, and no sounds can be played.
- Adjust the volume using the volume control. Drag the slider to increase or decrease the volume level.

### Drum Banks
- The Drum Machine provides two banks of drum samples: bankOne and bankTwo.
- Use the bank toggle switch to switch between the two banks. Each bank contains a unique set of drum samples.

### Playing Drum Sounds
- Click on the drum pads to trigger the corresponding drum sounds.
- The Drum Machine also supports keyboard input. Press the associated keyboard key to play the sound of the drum pad.
- The currently active drum pad is visually highlighted.

## 4. Components
### DisplayZone
The DisplayZone component displays the current status and controls of the Drum Machine.

Props:
- `message`: The message to display on the Drum Machine. It can indicate the selected drum bank or other relevant information.
- `togglePower`: Function to toggle the power state of the Drum Machine.
- `toggleState`: The current state of the toggle button.
- `toggleBank`: Function to toggle between drum banks.
- `powerState`: The current power state of the Drum Machine.

### DrumPad
The DrumPad component represents the drum pads and handles the triggering of drum sounds.

Props:
- `volume`: The volume level of the Drum Machine.
- `setMessage`: Function to set the message displayed on the Drum Machine.
- `powerState`: The current power state of the Drum Machine.
- `currentBank`: The currently active drum bank.
- `clickedPad`: The ID of the currently clicked drum pad.
- `setClickedPad`: Function to set the currently clicked drum pad.

### ToggleBank
The ToggleBank component provides a switch to toggle between drum banks.

Props:
- `checked`: The current state of the toggle switch.
- `onChange`: Function to handle the change event of the toggle switch.
- `powerState`: The current power state of the Drum Machine.

### PowerButton
The PowerButton component represents the power button of the Drum Machine.

Props:
- `powerState`: The current power state of the Drum Machine.
- `toggleState`: The current state of the power button.
- `togglePower`: Function to toggle the power state of the Drum Machine.

## 5. DrumAudioData
The DrumAudioData module contains the audio samples and configurations for the drum pads.
The `DrumAudioData` module contains audio samples and configurations for the drum pads. It defines two arrays, `bankOneAudios` and `bankTwoAudios`, which represent the drum samples for each bank.

### bankOneAudios
The `bankOneAudios` array contains objects representing the drum samples for `bankOne`. Each object has the following properties:

- `keyTrigger`: The keyboard key or trigger associated with the drum pad.
- `src`: The URL or path to the audio file for the drum sound.
- `id`: The identifier or name of the drum sound.
- `keyCode`: Dynamically generated based on the keyTrigger value using `keyTrigger.charCodeAt()` in a function, ensuring code maintainability and scalability without hardcoding.

### bankTwoAudios
The `bankTwoAudios` array is similar to `bankOneAudios` but contains objects representing the drum samples for `bankTwo`.

## 6. Examples

#### Key Functions
Here are some key functions used in the Drum Machine project:

### handleVolumeChange(value)
- Description: This function handles changes in the volume control of the Drum Machine.
- Parameters:
  - `value`: The new volume level.
- Usage example:
  ```javascript
  const handleVolumeChange = (value) => {
    setVolume(value);
  }
  ```

### togglePower()
- Description: This function toggles the power state of the Drum Machine.
- Usage example:
  ```javascript
  const togglePower = () => {
    if (!powerState) {
      setMessage("");
      setToggleState(false);
    }
    setPowerState(!powerState);
  }
  ```

### toggleBank()
- Description: This function toggles between the drum banks (`bankOne` and `bankTwo`).
- Usage example:
  ```javascript
  const toggleBank = () => {
    const newBank = bank === 'bankOne' ? 'bankTwo' : 'bankOne';
    setBank(newBank);
    if (!powerState) {
      const newBankTitle = newBank === 'bankOne' ? 'Heater Kit' : 'Smooth Piano Kit';
      setMessage(newBankTitle);
    }
  }
  ```

### handleAudio(src, id)
- Description: This function handles the playing of a drum sound.
- Parameters:
  - `src`: The URL or path to the audio file.
  - `id`: The identifier or name of the drum sound.
- Usage example:
  ```javascript
  const handleAudio = (src, id) => {
    if (powerState) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
    setMessage(id);
    setClickedPad(id);
  }
  ```

These functions are used within the components of the Drum Machine to handle user interactions, control the power state and volume, and play the drum sounds.

### Dynamic Drum Pad KeyCodes
To handle the keyCodes associated with each drum pad's key trigger, a flexible and maintainable approach was adopted. Rather than hardcoding the keyCodes, a dynamic generation method was implemented based on the trigger value - making it easier to expand the drum pad collection and accommodate future updates.

```javascript
const generateDrumPadObject = (keyTrigger, src, id) => {
  return {
    keyTrigger,
    src,
    id,
    keyCode: keyTrigger.charCodeAt(0)
  };
};

const generateAudioBank = (bankAudios) => {
  return bankAudios.map((audio) =>
    generateDrumPadObject(audio.keyTrigger, audio.src, audio.id)
  );
};
```

The `generateDrumPadObject` function takes the `keyTrigger`, `src`, and `id` as parameters and returns an object that includes these properties along with the dynamically generated `keyCode` using `keyTrigger.charCodeAt(0)`. 

The `generateAudioBank` function utilizes `generateDrumPadObject` to generate an entire audio bank by mapping over the provided `bankAudios`. This ensures that each drum pad in the bank has a unique `keyCode` associated with its `keyTrigger`.

## Conclusion
This documentation provides an overview of the Drum Machine project, including installation instructions, usage guidelines, and details about the different components. 
