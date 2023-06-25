using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Playwright;
using System.Threading.Tasks;

namespace PlaywrightTestsNET 
{
    [TestClass]
    public class AppsPage
    {
        private readonly IPage _page;
        private ILocator _searchTextBox;
        private ILocator _magnifyingGlass;
        private ILocator _microsoft365BusinessViewPlansButton;
        private ILocator _microsoft365BusinessOverviewSidebarOption;
        public ILocator _microsoft365BusinessOverviewAddonsLearnMoreButton;

        public AppsPage(IPage page)
        {
            _page = page;
            _searchTextBox = _page.Locator("#stext1");
            _magnifyingGlass = _page.Locator(".d-none > .d-flex > .input-group > .input-group-prepend > .input-group-text > .btn > .material-icons");
            _microsoft365BusinessViewPlansButton = _page.Locator(":nth-child(1) > .pt-4 > .product > .more-details > .row > .col-auto > .text-nowrap > div");
            _microsoft365BusinessOverviewSidebarOption = _page.Locator("[href=\"#view-overview\"] > .d-flex");
            _microsoft365BusinessOverviewAddonsLearnMoreButton = _page.Locator(":nth-child(2) > p > a");
        }

        public async Task Goto(string url)
        {
            await _page.GotoAsync(url);
        }

        public async Task SearchForMicrosoft365Business(string searchString)
        {
            await _searchTextBox.TypeAsync(searchString);
            await _magnifyingGlass.ClickAsync();
        }

        public async Task ClickViewPlans()
        {
            await _microsoft365BusinessViewPlansButton.ClickAsync();
        }

        public async Task ClickOverview()
        {
            await _microsoft365BusinessOverviewSidebarOption.ClickAsync();
        }

        public async Task ClickLearnMore()
        {
            await _microsoft365BusinessOverviewAddonsLearnMoreButton.ClickAsync();
        }
    }
}
