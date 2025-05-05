const core = require('@actions/core');
const github = require('@actions/github');

async function run()
{
    console.log('Hello there!');

    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const oktokit = github.getOctokit(GITHUB_TOKEN);

    

    const {context = {}} = github;
    const {pull_request} = context.payload;

    const repoName = github.context.payload.repository.name;

    console.log('GITHUB_TOKEN == ' + GITHUB_TOKEN);
    console.log('context.repo == ' + context.repo);
    console.log('github.context.payload.repository.name == ' + github.context.payload.repository.name);
    console.log('pull_request.number == ' + pull_request.number);
    console.log('context.repoName == ' + context.repoName);
    console.log('repoName == ' + repoName);

    await oktokit.rest.issues.createComment({
        ...context.repo, 
        issue_number: pull_request.number, 
        body: 'Comment from RV'});

}

run();