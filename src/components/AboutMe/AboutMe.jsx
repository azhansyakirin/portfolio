import React from "react";

const AboutMe = ({ id = "" }) => {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in hac. Vestibulum sed arcu non odio.\n\nGravida rutrum quisque non tellus orci ac auctor. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. In cursus turpis massa tincidunt dui ut ornare lectus. Etiam erat velit scelerisque in dictum non consectetur. Vel pretium lectus quam id leo in vitae turpis massa. Convallis posuere morbi leo urna molestie at elementum eu. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum.\n\nEu lobortis elementum nibh tellus molestie. Elit eget gravida cum sociis. Cras semper auctor neque vitae tempus. Sit amet justo donec enim diam vulputate ut. Diam quis enim lobortis scelerisque fermentum dui faucibus. Consequat semper viverra nam libero justo laoreet sit amet cursus.\n\nDonec ac odio tempor orci dapibus. Turpis egestas maecenas pharetra convallis posuere. Nec tincidunt praesent semper feugiat. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Dui id ornare arcu odio. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Magna ac placerat vestibulum lectus mauris ultrices eros in. Aliquam nulla facilisi cras fermentum odio eu. Magna eget est lorem ipsum dolor sit. Blandit volutpat maecenas volutpat blandit. Sed odio morbi quis commodo. Magna eget est lorem ipsum dolor sit amet. Cras tincidunt lobortis feugiat vivamus at augue. Donec enim diam vulputate ut pharetra sit amet aliquam. Lorem mollis aliquam ut porttitor leo. Condimentum id venenatis a condimentum vitae sapien. Arcu dui vivamus arcu felis bibendum. Enim sit amet venenatis urna cursus eget nunc scelerisque.\n\nFacilisis leo vel fringilla est ullamcorper eget. Volutpat diam ut venenatis tellus in metus vulputate. Purus non enim praesent elementum facilisis leo. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Aliquet nibh praesent tristique magna sit amet purus gravida. Nibh sit amet commodo nulla. Justo nec ultrices dui sapien eget mi proin sed. Turpis in eu mi bibendum neque egestas. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Vitae sapien pellentesque habitant morbi tristique senectus et. Augue mauris augue neque gravida in fermentum et sollicitudin."

    return (
        <section id={id} className="flex flex-col justify-center">
            <h1 className="font-jetbrains">About Me</h1>
            <p className="font-monolisa text-sm text-justify p-4">{text}</p>
        </section>
    )
}

export default AboutMe;