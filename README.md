# Devops-LPW

An automated CI/CD pipeline and Cloud Architecture project deploying a high-performance static website to Amazon S3 via AWS CodeCommit and AWS CodePipeline.

## 🏗️ Architecture Overview

```
[Developer]
    │
    ├──> [GitHub Repo (Devops-LPW)]
    │
    └──> [AWS CodeCommit Repo (Devops-LPW-Repo)]
             │
             ▼
     [AWS CodePipeline]
             │ (Automated Artifact Trigger & Extract)
             ▼
      [Amazon S3 Static Website Bucket]
             │
             ▼
      [Public Live Web URL]
```

## 🚀 Features
- **Zero-Downtime Deployment**: Updates pushed to `main` branch trigger AWS CodePipeline automatically.
- **Serverless Hosting**: Cost-effective, globally resilient static website hosted on Amazon S3.
- **Enterprise IAM Governance**: Secure least-privilege role-based access for deployment pipelines.
- **Modern UI/UX**: Responsive glassmorphism interface with real-time pipeline monitoring simulation.

## 🛠️ Tech Stack
- **Cloud Provider**: Amazon Web Services (AWS)
- **CI/CD Orchestration**: AWS CodePipeline
- **Source Control**: GitHub & AWS CodeCommit
- **Hosting & Storage**: Amazon S3 (Static Website Hosting)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)

---
*Created by Sarth00718*
