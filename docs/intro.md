---
sidebar_position: 1
---

# Introduction

**Baltica** is a comprehensive Minecraft Bedrock toolkit designed to provide developers with the tools they need for creating bots, servers, and packet manipulation utilities.

## Installation

Get started with Baltica by installing it via npm:

```bash
npm install baltica
```

## What is Baltica?

Baltica is a powerful Minecraft Bedrock client library that offers three main components:

### 🤖 Bot Client
Create and manage Minecraft Bedrock bots with ease. Perfect for automation, testing, or creating helpful server utilities.

### 🖥️ Bare Bones Server
A lightweight server implementation that handles the essential connection and login process. Note that this server provides the foundation up to the login phase - it does not include player spawning or world management, as these are complex features better handled by dedicated server implementations like [SerenityJS](https://serenityjs.org/).

### 🌉 Bridge (MITM Proxy)
A powerful man-in-the-middle proxy for intercepting, analyzing, and modifying Minecraft Bedrock Edition packets. Perfect for debugging, packet analysis, and protocol research.

## Repository

Find the source code and contribute to Baltica on GitHub:

**[github.com/SanctumTerra/Baltica](https://github.com/SanctumTerra/Baltica)**

## Use Cases

- **Bot Development**: Create automated players for testing or utility purposes
- **Protocol Research**: Analyze and understand MCBE packet structures
- **Server Development**: Build custom server implementations with the networking foundation
- **Packet Manipulation**: Intercept and modify game packets for debugging or enhancement
- **Testing Tools**: Automate testing of Minecraft Bedrock servers

## Next Steps

Ready to get started? Check out our tutorials:

- **[Creating Your First Client](./tutorial-client/client-creation)** - Learn how to create a basic Minecraft bot
- **[Event Handling](./tutorial-client/event-handling)** - Listen and respond to game events  
- **[Sending Packets](./tutorial-client/sending-packets)** - Make your client interact with the server

## Community

Join our community and get help:

- **GitHub Issues**: Report bugs or request features
- **Discussions**: Ask questions and share your projects

---

*Baltica provides the building blocks - the creativity is up to you!*
