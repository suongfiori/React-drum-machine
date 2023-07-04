const bankOneAudios = [
    {
      keyTrigger: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      id: "Heater 1"
    },
    {
      keyTrigger: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      id: "Heater 2"
    },
    {
      keyTrigger: "E",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      id: "Heater 3"
    },
    {
      keyTrigger: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      id: "Heater 4"
    },
    {
      keyTrigger: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      id: "Clap"
  
    },
    {
      keyTrigger: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      id: "Open HH"
    },
    {
      keyTrigger: "Z",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      id: "Kick n' Hat"
    },
    {
      keyTrigger: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      id: "Kick"
    },
    {
      keyTrigger: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      id: "Closed HH"
    }
  ]
  
const bankTwoAudios = [
    {
      keyTrigger: 'Q',
      id: 'Chord-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyTrigger: 'W',
      id: 'Chord-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyTrigger: 'E',
      id: 'Chord-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyTrigger: 'A',
      id: 'Shaker',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyTrigger: 'S',
      id: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyTrigger: 'D',
      id: 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyTrigger: 'X',
      id: 'Side-Stick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyTrigger: 'C',
      id: 'Snare',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ]

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
  
  const audioBanks = {
    bankOne: generateAudioBank(bankOneAudios),
    bankTwo: generateAudioBank(bankTwoAudios)
  };

  const DrumAudioData =  audioBanks;

  export default DrumAudioData