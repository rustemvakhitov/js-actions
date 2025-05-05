const core = require('@actions/core');
const github = require('@actions/github');

async function run()
{
    console.log('Hello there!');

    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const oktokit = github.getOctokit(GITHUB_TOKEN);

    console.log('GITHUB_TOKEN == ' + GITHUB_TOKEN);

    const {context = {}} = github;
    const {pull_request} = context.payload;

    const repoName = context.payload.repository.name;

    console.log('context.repo == ' + context.repo);
    console.log('github.context.payload.repository.name == ' + github.context.payload.repository.name);
    console.log('pull_request.number == ' + pull_request.number);

    await oktokit.issues.createComment({
        repo: context.repo, 
        issue_number: pull_request.number, 
        body: 'Comment from RV'});

}

run();

