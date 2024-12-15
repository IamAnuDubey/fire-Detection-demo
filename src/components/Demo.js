import React from 'react';

const Demo = () => {
  return (
    <section id="demo" class="py-5">
    <div class="container">
        <h2 class="text-center mb-4">Project Demo</h2>
        <div class="text-center">
            <video controls class="img-fluid">
                <source src="assets/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    </section>
  );
};

export default Demo;
