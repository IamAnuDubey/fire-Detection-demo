import React from 'react';

const Abstract = () => {
  return (
    <section id="aboutTheProject" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-4">About the Project</h2>
        <p>Generally, the fire accident frequently causes economical and ecological damage as well as endangering people's lives. To avoid the fire's disasters, many early fire-detection techniques have been explored and most of them are based on particle sampling, temperature sampling, relative humidity sampling, air transparency testing, smoke analysis, in addition to the traditional ultraviolet and infrared fire detectors. However, those detectors either must be set in the proximity of a fire or can't provide the additional information about the process of burning, such as fire location, size, growing rate, and so on. Thus, they are not always reliable because energy emission of non-fires or byproducts of combustion, which can be yielded in other ways, may be detected by misadventure. This usually results in false alarms. To provide more reliable information about fires, the visual-based approach is becoming more and more interesting.</p>
        <h2>Objective</h2>
        <p>The main goal of effective fire detection (protection) measures is to safeguard lives, property, and the environment from fire's risks and impacts.
            This specifically means:
            Preventing threats to one's life or health ( Personnel protection ).
            Preventing material damage (Asset protection).
            Preventing ecological damage (environment protection).
            </p>
            <h2>Introduction</h2>
            <p>Fire hazard can be disastrous to human property and lives,if it is not detected at the right stage.
                The damage can be reduced if fire is detected at early stage.
                When the fire is of smaller magnitude ,less efforts are required to control it.
                In order to limit fire hazards , effective fire detection techniques are required.
                Automated fire detection systems can be used to detect fire
                </p>
                <h2>Present System</h2>
                <p>The Present system of fire detection there are certain limitation
                    Sensors -high false alarm rate
                    Open and large areas-not suitable .
                    Fatal time delay.
                    </p>
                    <h2>Proposed System</h2>
                    <p>The research proposes an early fire detection method based on image processing generated by an ordinary camera is proposed. By using image processing technology for detecting the fire, the limitations of the present system can be  reduced because in this system camera acts like a human eye, as it detects a fire, the  video is captured, and the image is processed using the software alert user.
                    </p>
                    <h2>Conclusion</h2>
                <p>The research proposes an early fire detection method based on image processing generated by an ordinary camera is proposed. The engine used the color and fluctuations characteristics of fire to detect it .Experimental results proved that the proposed technique is effective in recognizing the fire.
                </p>
    </div>
</section>
  );
};

export default Abstract;