import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
    selector: "app-projects-one",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
    Projects = [
        {
            Title: "HakimHub",
            Description:
                "HakimHub – Ethiopia’s first AI-powered medical assistant, leveraging large language models to deliver personalized symptom analysis and smart healthcare recommendations.",
            imgs: [
                "assets/img/hakimhub.png",
                "assets/img/inboxwave/inbx2.png",
                "assets/img/inboxwave/inbx3.png",
                "assets/img/inboxwave/inbx4.png",
                "assets/img/inboxwave/inbx5.png",
                "assets/img/inboxwave/inbx6.png",
                "assets/img/inboxwave/inbx7.png",
                "assets/img/inboxwave/inbx8.png",
            ],
            Technologies: ["NextJS", ".Net", "postgres", "Tailwind", "OpenAI"],
            link: "https://hakimhub.app/",
        },
        {
            Title: "Tammwe",
            Description:
                "Tammwe is a marketplace that provides a trust-driven platform for freelancers and businesses to discover, connect, collaborate, and transact with each other.",
            imgs: [
                "assets/img/tammwe.png",
                "assets/img/inboxwave/inbx2.png",
                "assets/img/inboxwave/inbx3.png",
                "assets/img/inboxwave/inbx4.png",
                "assets/img/inboxwave/inbx5.png",
                "assets/img/inboxwave/inbx6.png",
                "assets/img/inboxwave/inbx7.png",
                "assets/img/inboxwave/inbx8.png",
            ],
            Technologies: ["NextJS", "Redux", "Tailwind", "Node", "PostgreSQL"],
            link: "",
        },
        {
            Title: "LLM Sermon Platform",
            Description:
                "A modern platform designed to assist pastors and ministers by using AI tools to simplify and enhance sermon preparation, saving time and improving message delivery.",
            imgs: [
                "assets/img/llm-sermon/llm-1.png",
                "assets/img/llm-sermon/llm-2.png",
                "assets/img/llm-sermon/llm-3.png",
                "assets/img/llm-sermon/llm-4.png",
                "assets/img/llm-sermon/llm-5.png",
                "assets/img/llm-sermon/llm-6.png",
                "assets/img/llm-sermon/llm-7.png",
                "assets/img/llm-sermon/llm-8.png",
            ],
            Technologies: [
                "Next.JS",
                "React",
                "SASS",
                "Material Ui",
                "Fast Api",
            ],
            link: "",
        },
        {
            Title: "Hope for Children",
            Description:
                "A donation and storytelling platform for a children's charity. Built with React and .NET, it shares impactful stories and accepts online donations via Chapa integration.",
            imgs: [
                "assets/img/hope/page1.png",
                "assets/img/hope/page2.png",
                "assets/img/hope/page3.png",
                "assets/img/hope/page4.png",
                "assets/img/hope/page5.png",
                "assets/img/hope/page6.png",
            ],
            Technologies: ["React", "Redux", ".Net", "MongoDB", "Material UI"],
            link: "https://hopeforchildren.onrender.com/",
        },
        // {
        //     Title: "Awan Awalia",
        //     Description:
        //         "A car wash service platform offering online vehicle registration and package booking. Built with Next.js and NestJS, and includes a Flutter mobile app for user convenience.",
        //     imgs: [
        //         "assets/img/awalia/awan1.png",
        //         "assets/img/awalia/awan2.png",
        //         "assets/img/awalia/awan3.png",
        //         "assets/img/awalia/awan4.png",
        //         "assets/img/awalia/awan5.png",
        //         "assets/img/awalia/awan6.png",
        //     ],
        //     Technologies: ["Next.JS", "Nest.JS", "Node", "PostgreSQL"],
        //     link: "https://excw-admin.vercel.app/",
        // },
        {
            Title: "IMIS (Integrated Management Information System)",
            Description:
                "A robust Internal management system built for research, document, and library handling. Developed with Angular and .NET, it enhances workflow across institutions.",
            imgs: ["assets/img/imis.png"],
            Technologies: ["Angular", "SASS", "Angular Material", ".Net"],
            link: "https://imis.ifa.gov.et/",
        },

        {
            Title: "Lizzy, Contract Advisor RAG",
            Description:
                "Lizzy AI is developing an AI-powered legal assistant that uses RAG and LLMs to deliver accurate, context-aware answers for contract analysis and review.",
            imgs: ["assets/img/rag.webp"],
            Technologies: ["LLM", "RAG", "Python", "LangChain", "LlamaIndex"],
            link: "https://medium.com/@birehananteneh4/contract-advisor-rag-towards-building-a-high-precision-legal-expert-llm-app-560c4776370c",
        },
    ];

    @ViewChild("imgContainer") imgContainer: ElementRef;

    constructor() {}

    ngOnInit(): void {}

    debug() {
        this.imgContainer.nativeElement.scroll({
            top: this.imgContainer.nativeElement.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }
}
