# Song Builder

- Content for the site is below. New sections will be added for each heading.

## The Musician

> When a newcomer visits the world of music and asks the question, "How do I make a song?", the answer is often lost in words like signature, notes, progression, chord, key, and theory. At the end of the day the newcomer may know how to read music, but they will still know nothing about how to make a song. So called experts in the field will fill your head with dreams about the art of songwriting and the freedom from rules to create and explore. Then they will tear you apart with theory and how your idea does not follow the rules. You will be told about how you don't know music theory and need to study more. It is exhausting. This project is a representation of an attempt to navigate this world and interpret the often elusive nature of song writing, music theory, and musicians. Things will be "wrong", approaches will be "flawed", and nothing created here would ever be considered "music" by any self respecting real musician.

## juncmodule

> I started experimenting with noise in the early 90s. My father owned multiple synthesizers, a drum machine, and had it all hooked up to an Atari ST. I was given many of these things and over time they were traded for more gear. Eventually, I moved into purely computer generated music. I have released several albums since the late 90s. During that time I have switched back and forth between purely computer generated music and music created on hardware synthesizers.

> I spent time studying electronic music history and learning about Edgard Varèse, Karlheinz Stockhausen, Pierre Boulez, and John Cage early in my music career. As a result my music is based more on experiments, noise, and sound design. I have often stated that I consider my music to be disposable. Once I compose a piece I typically discard source files and never revisit the material.

> I have considered traditional compositional methods to be of little use to me during many of my musical experiments. In recent years I have been more open to traditional composition. I am mostly interested in popular music and traditional rock and pop song structure. I am intrigued by what drives large numbers of people from diverse socio-economic backgrounds to listen to the same music. A common phenomenon of the 2000s was a small number of producers behind multiple top charting pop artists. The driving interest behind this being a search for the pop song formula.

> Today I pursue methods of music generation through my purposefully limited knowledge of music theory. I am actively seeking a method to programmatically generate a popular song. My ultimate goal is to compose a piece of music that at first listen is utterly awful yet the audience finds that they cannot listen to it enough times.

> I thoroughly enjoy the process of creating music. Sometimes I create music in pursuit of the serious undertaking outlined here. At other times I make dance beat driven music, noise, or whatever comes out just because I am enjoying the process.

## Code

> More than a year ago I wrote a small program that allowed the user to select a progression length and key signature. A random chord progression was then generated. The ambitious plan was to take that and, using a formulated song structure template, generate MusicXML files that could be imported into a Digital Audio Workstation. Since Ableton Live was my DAW of choice I was having difficulty finding a method to bring the MusicXML files into the program. I was also still struggling with the concepts of music theory and song structure. I have now converted much of that code from PHP to JavaScript. I am moving away from file generated and toward a series of custom composition instructions directed at specific hardware.

## Music Machines

> This project is intended to generate compositions specifically for the Elektron Monomachine and Machinedrum. Two hardware synthesizers with solid limitations that drive composition in a particular direction. I am embracing these limitations as a way to streamline my song structure formula. I have found that hardware synthesizers often inspire sonic experimentation, especially in a live scenario.

## Process

> Notes to build out the process

---

- Machinedrum
  - Default Drum Kit Layout
- Monomachine
  - Track 1: Backing
  - Track 2: Bass
  - Track 3: Melody 1
  - Track 4: Melody 2
  - Track 5: Melody 3
  - Track 6: Machinedrum Thru

- Timing Breakdown
  - 16 Steps/Measure
  - 4 Measures/Pattern
  - 64 Total Steps/Pattern
  - 120 BPM
  - 4 Beats/Measure
  - 1 Measure/2 Seconds
  - 3 Minutes = 180 Seconds = 90 Measures

- Instrument Parts
  - Backing
  - Bass
  - Melody 1
  - Melody 2
  - Melody 3
  - Kick
  - Percussion

- Song Structure Parts
  - Intro: Kick and Backing
  - Verse 1: Kick, Percussion, Bass, Backing, and Melody 1
  - Verse 2: Kick, Percussion, Bass, Backing, and Melody 2
  - Verse 3: Kick, Percussion, Bass, Backing, and Melody 3
  - Verse 4: Kick, Percussion, Bass, Backing, Melody 1, and Melody 3
  - Chorus: Kick, Percussion, Bass, Backing, Melody 1, Melody 2, and Melody 3
  - Bridge: Bass and Percussion
  - Outro: Kick and Backing

---

