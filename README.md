
## Welcome to react-share-pro 👋

[![npm version](https://img.shields.io/npm/v/react-share-pro/latest?logo=npm&style=flat)](https://www.npmjs.com/package/react-share-pro)
[![node version](https://img.shields.io/node/v/react-share-pro?color=blue&style=flat)](https://www.npmjs.com/package/react-share-pro)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-share-pro) 
[![downloads](https://img.shields.io/npm/dm/react-share-pro.svg?label=monthly%20downloads)](https://www.npmjs.com/package/react-share-pro) 
<!-- [![downloads](https://img.shields.io/npm/dt/react-share-pro.svg?label=total%20downloads)](https://www.npmjs.com/package/react-share-pro) -->
[![documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=flat)](https://github.com/react-share-pro#readme)
[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat)](https://github.com/react-share-pro/graphs/commit-activity)
<!-- ![NPM Collaborators](https://img.shields.io/npm/collaborators/react-share-pro) -->
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://github.com/react-share-pro/blob/main/LICENSE)



## Introduction

`react-share-pro` is a powerful library for adding customizable social media sharing buttons to your React applications, enabling seamless sharing of content across popular platforms .

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Version](#version-information)
- [Usage](#usage)
- [Available Components](#available-components)
- [Customization](#customization)
- [Props](#props)
- [License](#license)
- [Contributing](#contributing)
- [Issues](#issues)
- [New_Feature](#new_feature)
- [Contact](#contact)

## Features
- no external script loading, i.e. no dependencies on SDKs
- supports tree shaking with ES modules
- use own style pop-up window
- share buttons for:
	- Facebook
	- Twitter
	- Email

## Installation

You can install `react-share-pro` via npm or yarn:

```bash
npm install react-share-pro
```

or

```bash
yarn add react-share-pro
```

## Version Information

### Current Version: 2.1.5

This is an alpha version of `react-share-pro`. It includes the latest features and improvements but may also contain bugs or unfinished functionality. We encourage developers to test this version but recommend using it in non-production environments.

### Previous Stable Version: 2.1.5

If you prefer stability over new features, you may choose to use the latest stable version. It is well-tested and suitable for production environments. You can install it by running:

## Usage

To use `react-share-pro`, import the desired components and render them in your React application. Below is a basic example:

### Basic Example

```javascript
import React from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	EmailShareButton,
} from "react-share-pro";

const ShareComponent = () => {
	const shareUrl = "https://yourwebsite.com";
	const shareText = "Check out this amazing website!";
	const isDefault = true;
	return (
		<div>
			<h2>Share this page:</h2>
			<FacebookShareButton url={shareUrl} text={shareText} isDefault={isDefault}>
				Share on Facebook
			</FacebookShareButton>
			<TwitterShareButton url={shareUrl} text={shareText} isDefault={isDefault}>
				Share on Twitter
			</TwitterShareButton>
			<EmailShareButton
				subject='Amazing Website'
				body='Check out this amazing website!'
				isDefault={isDefault}>
				Share via Email
			</EmailShareButton>
		</div>
	);
};

export default ShareComponent;
```

## Available Components

`react-share-pro` includes the following components:

- **FacebookShareButton**: A button to share on Facebook.
- **TwitterShareButton**: A button to share on Twitter.
- **EmailShareButton**: A button to share on Twitter.

## Customization

`react-share-pro` customize the buttons by applying your own styles and configurations. Here’s how you can enhance the appearance and behavior of your buttons:

### Custom Children

You can pass any React node as children to the share buttons, allowing you to use custom images, SVGs, or text. This gives you the flexibility to design buttons that fit your application's branding.

### Example

```javascript
import React from "react";
import FacebookIcon from "./icons/facebook-icon.png"; // Assuming you have a PNG icon

const ShareComponent = () => {
	const shareUrl = "https://yourwebsite.com";
	const shareText = "Check out this amazing website!";

	return (
		<div>
			<h2>Share this page:</h2>
			<FacebookShareButton url={shareUrl} text={shareText} isDefault={false}>
				<img
					src={FacebookIcon}
					alt='Facebook'
					style={{ width: "20px", marginRight: "5px" }}
				/>
				Share on Facebook
			</FacebookShareButton>
		</div>
	);
};

export default ShareComponent;
```

### costum CSS Example

```css
.share-button {
	background-color: #3b5998; /* Facebook blue */
	color: white;
	padding: 10px 15px;
	border-radius: 5px;
	text-align: center;
	cursor: pointer;
	transition: background-color 0.3s;
}

.share-button:hover {
	background-color: #365e8a; /* Darker Facebook blue */
}
```

### Applying Custom Styles

You can apply these styles in your components like this:

```javascript
<FacebookShareButton
	className='share-button'
	url={shareUrl}
	title={title}
	isDefault={false}>
	Share on Facebook
</FacebookShareButton>
```

## Props

Each `react-share-pro` component accepts specific props:

### FacebookShareButton

- **url** (string): The URL you want to share or window.location.href .
- **text** (string): The title for the shared content.

### TwitterShareButton

- **url** (string): The URL you want to share or window.location.href.
- **text** (string): The title for the shared content.

### EmailShareButton

- **subject** (string): The subject line for the email.
- **body** (string): The body content of the email.

### Common Props (optional)

- **children** (node): The content inside the button (can be text or an icon).
- **className** (string, optional): Custom CSS class for additional styling.
- **tab** (string, optional): The target for the email link (default is '\_blank').
- **isDefault** (boolean): Whether to use the default Facebook share button or a custom one

### Examples

#### Facebook Share Example

```javascript
<FacebookShareButton url='https://yourwebsite.com' text='Check this out!'>
	Share on Facebook
</FacebookShareButton>
```

#### Email Share Example

```javascript
<EmailShareButton
	subject='Amazing Website'
	body='Check out this amazing website!'>
	Share via Email
</EmailShareButton>
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/hellojyoti03/react-share-pro/blob/main/LICENSE) file for more information.

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](https://github.com/hellojyoti03/react-share-pro/blob/main/CONTRIBUTING.md) for guidelines on how to get started.

## Issues

If you encounter any issues, please read our [ISSUES.md](https://github.com/hellojyoti03/react-share-pro/blob/main/ISSUES.md) for guidlines how to submit a issue .

## New_Feature

We welcome contributing a new feature to `react-share-pro` Please read our [NEW_FEATURE.md](https://github.com/hellojyoti03/react-share-pro/blob/main/NEW_FEATURE.md) for guidelines for how to propose a new feature.

## Contact

For any questions or feedback, please reach out to [jyotiprakash.panigrahi055@gmail.com].

