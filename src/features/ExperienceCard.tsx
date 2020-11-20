import React, { Component } from "react";
import "../shared/styles/styles.scss";
import Typography from "@material-ui/core/Typography";

class EducationCard extends Component {
  render() {
    return (
      <>
        <Typography variant="h6" color="textPrimary">
          IT Consultant
        </Typography>
        <Typography color="textPrimary">
          <strong>Pariveda Solutions</strong>
        </Typography>
        <Typography color="textPrimary">Atlanta, GA</Typography>
        <Typography color="textPrimary">July 2017 - present</Typography>
        <div className="space--xl" />
        <Typography color="textPrimary">
          Design, develop, and deliver technical solutions to clients across
          industries
          <br />
          <strong>
            Key Project: Healthcare Financial Data Analytics | Roles: Data
            Analyst, Tableau Developer
          </strong>
          <br />
          <ul>
            <li>
              Visualized insights from doctor appointment metrics through
              dashboard development to inform administrative actions to take
              based on patient behavior
            </li>
            <li>
              Identified and developed proofs of concept to incorporate
              predictive analytics and machine learning into current hospital
              and business operations
            </li>
          </ul>
          <br />
          <strong>
            Key Project: e-Commerce Data Platform Analytics | Roles: Data
            Analyst, Architect
          </strong>
          <br />
          <ul>
            <li>
              Assessed current set of data sources and utilization process to
              make business decisions
            </li>
            <li>
              Strategized a phased data analytics plan to match domain expertise
              to the right data, maximize effectiveness of marketing spend, and
              enable data-driven decision making
            </li>
          </ul>
          <br />
          <strong>
            Key Project: Customer Persona Build | Role: UX Analyst
          </strong>
          <br />
          <ul>
            <li>
              Designed and facilitated a workshop with executive team to harvest
              current understanding of the company’s customers
            </li>
            <li>
              Synthesized outputs into personas, delivered recommendations and
              coaching to executive team regarding use of insights
            </li>
          </ul>
          <br />
          <strong>
            Key Project: Customer Persona Build | Role: UX Analyst
          </strong>
          <br />
          <ul>
            <li>
              Redesigned an outdated input-heavy webform using a Design Think
              framework and workshops to ensure a thoughtful approach to user
              experience and content strategy
            </li>
            <li>
              Led front-end development of the web application that resulted in
              increased speed to completion, improved data quality, and enabled
              user scalability
            </li>
          </ul>
          <br />
          <strong>
            Key Project: Pharmaceutical Services Design System | Roles: Lead
            Developer, Design Liaison
          </strong>
          <br />
          <ul>
            <li>
              Led a React team to advance an MVP-level component library to a
              verbose design system, enabling rapid prototyping and web
              application development across the organization
            </li>
            <li>
              Collaborated between development and design teams and planned
              roadmap to integrate organization rebranding efforts into the
              design system
            </li>
          </ul>
          <br />
        </Typography>
      </>
    );
  }
}

export default EducationCard;
