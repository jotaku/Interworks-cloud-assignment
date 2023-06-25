using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Playwright;
using System.Threading.Tasks;

namespace PlaywrightTestsNET
{
    [TestClass]
    public class AppsPageTests
    {
        private IPlaywright _playwright;
        private IBrowser _browser;
        private IBrowserContext _context;
        private IPage _page;
        private AppsPage _appsPage;

        const string targetUrl = "https://apps.interworkscloud.com/";
        const string searchTerm = "Microsoft 365 Business (New Commerce Experience)";
        const string expectedHref = "https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone#office-StandaloneSKU-pkdogb9";

        [TestInitialize]
        public async Task TestInitialize()
        {
            _playwright = await Playwright.CreateAsync();
            _browser = await _playwright.Chromium.LaunchAsync();
            _context = await _browser.NewContextAsync();
            _page = await _context.NewPageAsync();
            _appsPage = new AppsPage(_page);

            var cookie = new Cookie
            {
                Name = "WCSession_apps.interworkscloud.com_v4_CookieAcceptance",
                Value = "Accepted=1",
                Path = "/",
                Domain = "apps.interworkscloud.com"
            };

            await _context.AddCookiesAsync(new[] { cookie });
        }

        [TestMethod]
        public async Task VerifyHrefProperty()
        {
            await _appsPage.Goto(targetUrl);
            await _appsPage.SearchForMicrosoft365Business(searchTerm);
            await _appsPage.ClickViewPlans();

            string href = await _appsPage._microsoft365BusinessOverviewAddonsLearnMoreButton.GetAttributeAsync("href");
            Assert.AreEqual(expectedHref, href);
        }

        [TestMethod]
        public async Task VerifyRedirectedUrl()
        {
            await _appsPage.Goto(targetUrl);
            await _appsPage.SearchForMicrosoft365Business(searchTerm);
            await _appsPage.ClickViewPlans();
            await _appsPage.ClickOverview();

            var newPageTask = _page.WaitForPopupAsync();
            await _appsPage.ClickLearnMore();
            var newPage = await newPageTask;

            Assert.AreEqual(expectedHref, newPage.Url);
        }


        [TestCleanup]
        public async Task TestCleanup()
        {
            await _context.CloseAsync();
            await _browser.CloseAsync();
        }
    }
}
