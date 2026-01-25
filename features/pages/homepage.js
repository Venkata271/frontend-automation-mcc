import { expect } from '@playwright/test';

export default class HomePage {
  constructor(page) {
    this.page = page;

    // Central component map
    this.componentMap = {
      'Logo': page.getByRole('link', { name: 'Wichita Eagle' }),
      'Hamburger Menu': page.getByRole('menu'),
      'Login Button': page.getByText('Log In'),
      'Lead Story': page.getByRole('article').filter({ hasText: '2020 Homepage qa4 How much to' }),
      'Latest News Digest': page.getByRole('heading', { name: 'Latest', exact: true }),
      'Video Playlist': page.locator('div').filter({ hasText: 'Videos' }).nth(1),
      'From Our Partner Digests': page.getByText('From our partners test 3'),
      'Group of Digests': page.getByRole('heading', { name: 'Local' }),
      'Footer': page.getByText('Part of the McClatchy Media Network About Connect with us: Subscriptions')
    };
  }

  async open() {
    await this.page.goto('https://qa1.kansas.com/');
  }

  getComponent(name) {
    const locator = this.componentMap[name];
    if (!locator) {
      throw new Error(`Component "${name}" is not defined in HomePage`);
    }
    return locator;
  }

  async verifyComponentInViewport(name) {
    const locator = this.getComponent(name);
    const target = (await locator.count()) > 1 ? locator.first() : locator;

    await target.scrollIntoViewIfNeeded();
    await expect(target, `${name} should be visible`).toBeVisible();
    await expect(target, `${name} should be in viewport`).toBeInViewport();
  }
}