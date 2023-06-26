using Microsoft.Playwright;
using System.Threading.Tasks;

namespace PlaywrightTestsNET;
public class ResellersPage
{
    private readonly IPage _page;

    public ResellersPage(IPage page)
    {
        _page = page;
    }

    private async Task<IFrame> GetChatBoxFrame() 
    {
        var frameElement = await _page.QuerySelectorAsync("iframe[title=\"Drift Widget Chat Controller\"]");
        return await frameElement.ContentFrameAsync();
    }

    public async Task Goto(string targetUrl)
    {
        await _page.GotoAsync(targetUrl);
    }

    public async Task OpenChatBot()
    {
        var chatFrame = await GetChatBoxFrame();
        var response = await chatFrame.QuerySelectorAsync($"[role=button][name=\"Open chat with CloudBot in the Drift Widget messenger - Unread messages: 1\"]");
        await response.ClickAsync();
    }

    public async Task ClickResponse(string name)
    {
        var chatFrame = await GetChatBoxFrame();
        var response = await chatFrame.QuerySelectorAsync($"[role=button][name=\"{name}\"]");
        await response.ClickAsync();
    }

    public async Task EnterEmail(string email)
    {
        var chatFrame = await GetChatBoxFrame();
        var chatBoxTextBox = await chatFrame.QuerySelectorAsync("[placeholder=\"Write a reply...\"]");
        await chatBoxTextBox.FillAsync(email);

        var chatBoxSendButton = await chatFrame.QuerySelectorAsync("[role=button][name=\"send message\"]");
        await chatBoxSendButton.ClickAsync();
    }

    public async Task<bool> CheckFinalResponse()
    {
        var chatFrame = await GetChatBoxFrame();
        var finalResponse = await chatFrame.QuerySelectorAsync(":text('Sorry, I didn\'t understand that. I need a valid email address.', {exact: true})");
        var visible = await finalResponse.IsVisibleAsync();
        return visible;
    }

    public Task<Cookie> GetCookies()
    {
        var cookies = new[]
        {
            new Cookie
            {
                Name = "WCSession_apps.interworkscloud.com_v4_CookieAcceptance",
                Value = "Accepted=1",
                Path = "/",
                Domain = "apps.interworkscloud.com"
            }
        };
        return Task.FromResult(cookies[0]);
    }
}
