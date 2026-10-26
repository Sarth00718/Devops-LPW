// Interactive Pipeline Details
const stageDetails = {
  github: {
    command: 'git commit -am "chore: deploy latest updates" && git push origin main',
    output: [
      'Enumerating objects: 5, done.',
      'Counting objects: 100% (5/5), done.',
      'Compressing objects: 100% (4/4), done.',
      'Writing objects: 100% (5/5), 3.20 KiB | 3.20 MiB/s, done.',
      'Total 5 (delta 1), reused 0 (delta 0)',
      'To https://github.com/Sarth00718/Devops-LPW.git',
      '   4b89f2a..8a291f0  main -> main',
      'Webhook delivered: 200 OK (AWS EventBridge / CodePipeline Notification)'
    ]
  },
  codecommit: {
    command: 'aws codecommit get-repository --repository-name Devops-LPW-Repo',
    output: [
      '{',
      '  "repositoryMetadata": {',
      '    "repositoryName": "Devops-LPW-Repo",',
      '    "cloneUrlHttp": "https://git-codecommit.us-east-1.amazonaws.com/v1/repos/Devops-LPW-Repo",',
      '    "defaultBranch": "main",',
      '    "lastModifiedDate": "2026-10-26T07:15:00Z"',
      '  }',
      '}'
    ]
  },
  codepipeline: {
    command: 'aws codepipeline get-pipeline-state --name Devops-LPW-Pipeline',
    output: [
      'Checking pipeline execution status...',
      'Source: Succeeded (Revision: 8a291f0)',
      'Deploy: InProgress -> Succeeded (Extracted to S3 Target)',
      'Overall Execution: SUCCEEDED in 24 seconds.'
    ]
  },
  s3: {
    command: 'aws s3 website s3://devops-lpw-website-bucket/ --index-document index.html',
    output: [
      'S3 Static Website Configuration: Active',
      'Bucket Policy: Public Read (s3:GetObject) applied.',
      'Endpoints: http://devops-lpw-website-bucket.s3-website.amazonaws.com',
      'Response Header: HTTP/1.1 200 OK (Content-Type: text/html)'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const stepCards = document.querySelectorAll('.step-card');
  const terminalContent = document.getElementById('terminal-content');

  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active from all
      stepCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const stage = card.getAttribute('data-stage');
      const details = stageDetails[stage];

      if (details && terminalContent) {
        terminalContent.innerHTML = `
          <div class="terminal-line">
            <span class="terminal-prompt">$</span>
            <span class="terminal-text">${details.command}</span>
          </div>
          ${details.output.map(line => `<div class="terminal-output">${line}</div>`).join('')}
          <div class="terminal-output terminal-success" style="margin-top: 8px;">✓ Stage verified and functioning properly</div>
        `;
      }
    });
  });
});
