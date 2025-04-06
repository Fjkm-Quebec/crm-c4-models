# Church CRM C4 Models

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) <!-- Add a license badge if you have a license file -->

This repository contains the C4 model diagrams for the Church CRM (Customer Relationship Management) system. These diagrams provide a high-level overview of the system's architecture, helping stakeholders understand its structure, components, and interactions.

## What is the C4 Model?

The C4 model is a simple, hierarchical approach to software architecture diagrams. It's based on four core diagrams:

* **Context:** Shows the system in its environment, including users and other systems.
* **Containers:** Shows the high-level building blocks (e.g., web app, database) of the system.
* **Components:** Shows the components within each container.
* **Code:** (Optional) Shows the code-level details of the components.

## Diagrams

This project currently includes the following C4 diagrams:

### System Context Diagram

This diagram illustrates the Church CRM system within its operational environment. It depicts the users who interact with the system and the external systems it integrates with.

![System Context Diagram](diagrams/C4_context_Whole.png)

* **Description:**  The System Context diagram provides a high-level view of the Church CRM system, showing its boundaries and its relationships with external entities.
* **[View Full Size](diagrams/C4_context_Whole.png)** (Click to view the full-size image)

### Container Diagram

This diagram breaks down the Church CRM system into its high-level deployable/runnable containers. It shows the major structural elements of the system and how they interact.

![Container Diagram](diagrams/C4_containers_CRM.png)

* **Description:** The Container diagram details the major building blocks of the Church CRM system, such as web applications, databases, and APIs.
* **[View Full Size](diagrams/C4_containers_CRM.png)** (Click to view the full-size image)

### Component Diagram (Future)

*(This section is a placeholder for future development)*

* **Description:**  Future diagrams will show the components within each container, providing a more detailed view of the system's internal structure.

## Generating Diagrams

These diagrams are designed to be automatically generated from code, ensuring they stay up-to-date with the system's evolution.

This project uses the `c4-plantuml` tool to generate the diagrams.

### Installation

```bash
cd src
plantuml l1-context-all.puml
plantuml l2-crm-containers.puml
mv C4_Context_Whole.png ../diagrams/C4_Context_Whole.png
mv C4_containers_CRM.png ../diagrams/C4_containers_CRM.png 
```
