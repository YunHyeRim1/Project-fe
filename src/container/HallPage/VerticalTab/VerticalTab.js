import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HallDetail from '../HallDetail';
import VerticalWrapper from './VerticalTab.style';

const VerticalTab = () => {

    return (
        <VerticalWrapper>
        <div class="tabordion">
            <section id="section1">
                <input type="radio" name="sections" id="option1" checked />
                <label for="option1">John Lennon</label>
            </section>
            <section id="section2">
                <input type="radio" name="sections" id="option2" />
                <label for="option2">Paul McCartney</label>
            </section>
            <section id="section3">
                <input type="radio" name="sections" id="option3" />
                <label for="option3">George Harrison</label>
            </section>
            <section id="section4">
                <input type="radio" name="sections" id="option4" />
                <label for="option4">George Harrison</label>
            </section>
            <section id="section5">
                <input type="radio" name="sections" id="option5" />
                <label for="option5">George Harrison</label>
            </section>
            <section id="section6">
                <input type="radio" name="sections" id="option6" />
                <label for="option6">George Harrison</label>
            </section>
            <section id="section7">
                <input type="radio" name="sections" id="option7" />
                <label for="option7">George Harrison</label>
            </section>
        </div>
        </VerticalWrapper>
    );
};

export default VerticalTab;