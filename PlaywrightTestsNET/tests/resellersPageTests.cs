using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;
using System.Threading.Tasks;

namespace PlaywrightTestsNET;

[TestClass]
public class ResellersPageTests
{
    private IBrowser _browser;
    private IPage _page;
    private ResellersPage _resellersPage;
    private const string TargetUrl = "https://resellers.interworks.cloud/";
    private const string InvalidEmail = "mail-gmail.gr";

    [TestInitialize]
    public async Task TestInitialize()
    {
        var playwright = await Playwright.CreateAsync();

        _browser = await playwright.Chromium.LaunchAsync();

        var context = await _browser.NewContextAsync();

        context.Tracing.StartAsync(new(){
            Screenshots = true,
            Snapshots = true,
            Sources = true
        });

        _page = await context.NewPageAsync();

        _resellersPage = new ResellersPage(_page);
    }


    [TestMethod]
    public async Task ChatBotInvalidEmailValidationTest()
    {
        await _resellersPage.Goto(TargetUrl);
        await _resellersPage.ClickResponse("I wanna talk about something else😀 - Reply as a response to Hiya! Nice seeing ya! Wanna find out the benefits of partnering up with us?");
        await _resellersPage.ClickResponse("The weather - Reply as a response to Pick another subject! ☺️");
        await _resellersPage.ClickResponse("I need more info 🤔 - Reply as a response to Hey wanna join me up on the clouds?");
        await _resellersPage.ClickResponse("ok ☺️ - Reply as a response to I can arrange a call from our Partner Account Managers to give you all the insights you need to grow your business! Sounds like a plan?");
        await _resellersPage.EnterEmail(InvalidEmail);
        var isFinalResponseVisible = await _resellersPage.CheckFinalResponse();

        Assert.IsTrue(isFinalResponseVisible);
    }

    [TestCleanup]
    public async Task TestCleanup()
    {
        await _browser.CloseAsync();
    }
}
