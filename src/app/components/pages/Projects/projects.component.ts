import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects-one',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

 Projects = [
  {
    Title: "Inboxwave.com",
    Description: "Inboxwave is an AI-powered messaging platform that automates Instagram DMs for creators, influencers, and brands. It simplifies audience engagement through smart, scalable conversations.",
    imgs: [
      "assets/img/inboxwave/inbx1.png",
      "assets/img/inboxwave/inbx2.png",
      "assets/img/inboxwave/inbx3.png",
      "assets/img/inboxwave/inbx4.png",
      "assets/img/inboxwave/inbx5.png",
      "assets/img/inboxwave/inbx6.png",
      "assets/img/inboxwave/inbx7.png",
      "assets/img/inboxwave/inbx8.png"
    ],
    Technologies: ["Springboot", "Angular", "RxJS"],
    link: ""
  },
  {
    Title: "LLM Sermon Platform",
    Description: "A modern platform designed to assist pastors and ministers by using AI tools to simplify and enhance sermon preparation, saving time and improving message delivery.",
    imgs: [
      "assets/img/llm-sermon/llm-1.png",
      "assets/img/llm-sermon/llm-2.png",
      "assets/img/llm-sermon/llm-3.png",
      "assets/img/llm-sermon/llm-4.png",
      "assets/img/llm-sermon/llm-5.png",
      "assets/img/llm-sermon/llm-6.png",
      "assets/img/llm-sermon/llm-7.png",
      "assets/img/llm-sermon/llm-8.png"
    ],
    Technologies: ["Next.JS", "React", "SASS", "Material Ui", "Fast Api"],
    link: ''
  },
  {
    Title: "Tabcode SAAS",
    Description: "A complete SaaS solution for restaurants with Customer, Admin, and Restaurant modules. Built using Angular and Node.js, it ensures efficient service management and scalability.",
    imgs: [
      "assets/img/tabcode/page 1.png",
      "assets/img/tabcode/page 2.png",
      "assets/img/tabcode/page 3.png",
      "assets/img/tabcode/page 4.png"
    ],
    Technologies: ["Angular", "Node", "Angular Material", "RxJS"],
    link: ""
  },
  {
    Title: "Hope for Children",
    Description: "A donation and storytelling platform for a children's charity. Built with React and .NET, it shares impactful stories and accepts online donations via Chapa integration.",
    imgs: [
      "assets/img/hope/page1.png",
      "assets/img/hope/page2.png",
      "assets/img/hope/page3.png",
      "assets/img/hope/page4.png",
      "assets/img/hope/page5.png",
      "assets/img/hope/page6.png"
    ],
    Technologies: ["React", "Redux", ".Net", "MongoDB", "Material UI"],
    link: "https://hopeforchildren.onrender.com/"
  },
  {
    Title: "Awan Awalia",
    Description: "A car wash service platform offering online vehicle registration and package booking. Built with Next.js and NestJS, and includes a Flutter mobile app for user convenience.",
    imgs: [
      "assets/img/awalia/awan1.png",
      "assets/img/awalia/awan2.png",
      "assets/img/awalia/awan3.png",
      "assets/img/awalia/awan4.png",
      "assets/img/awalia/awan5.png",
      "assets/img/awalia/awan6.png"
    ],
    Technologies: ["Next.JS", "Nest.JS", "Node", "PostgreSQL"],
    link: 'https://excw-admin.vercel.app/'
  },
  {
    Title: "Chain Docs",
    Description: "A blockchain-based platform for validating digital documents. It ensures authenticity and tamper-proof verification through secure backend and responsive frontend architecture.",
    imgs: [
      "assets/img/chain-docs/chd1.png",
      "assets/img/chain-docs/chd2.png",
      "assets/img/chain-docs/chd3.png"
    ],
    Technologies: ["Nest.JS", "Node", "SASS", "express", "Material ui"],
    link: 'https://document-validation.onrender.com/'
  },
  {
    Title: "IMIS (Integrated Management Information System)",
    Description: "A robust Internal management system built for research, document, and library handling. Developed with Angular and .NET, it enhances workflow across institutions.",
    imgs: [
      "assets/img/imis.png"
    ],
    Technologies: ["Angular", "SASS", "Angular Material", ".Net"],
    link: "https://imis.ifa.gov.et/"
  }
];


  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor() { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}
}
