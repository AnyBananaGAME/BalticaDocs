---
title: Create your first client
sidebar_position: 1
---

# Creating a Baltica Client

Learn how to create and configure a Minecraft Bedrock client using Baltica. This guide will walk you through the basic setup and advanced configuration options.

## Quick Start

Let's start with a simple client that connects to a local server:

```ts
import { Client } from "baltica";

// Create a basic client with default settings
const client = new Client();

// Connect to the server (defaults to localhost:19132)
client.connect();
```

That's it! This creates a client that will connect to a Minecraft Bedrock server running on `localhost:19132` in offline mode.

## Configuration Options

For more control over your client's behavior, you can pass a configuration object:
```ts
import { Client } from "baltica";
import { InputMode, DeviceOS, CompressionMethod } from "@serenityjs/protocol";

const client = new Client({
    // Server connection settings
    address: "127.0.0.1",        // Server IP address
    port: 19132,                 // Server port
    
    // Authentication settings
    offline: false,              // Set to true for offline mode (no Xbox authentication)
    username: "BalticaClient",   // Username for offline mode
    tokensFolder: "tokens",      // Directory to cache authentication tokens
    
    // Performance settings
    worker: false,               // Whether to use a worker thread
    viewDistance: 11,            // Client view distance (chunks)
    compressionThreshold: 1,     // Compress packets larger than this size (1 = compress all)
    compressionMethod: CompressionMethod.Zlib, // Compression algorithm
    
    // Advanced settings
    emitUnknownPackets: true,    // Emit unknown packets as events
    
    // Skin customization
    skinData: {
        // Custom skin data - see SkinData type for all available fields
    },
    
    // Device simulation settings
    loginOptions: {
        deviceModel: "BalticaClient v1.0",    // Device model identifier
        currentInputMode: InputMode.Touch,    // Current input method
        defaultInputMode: InputMode.Touch,    // Default input method
        deviceOS: DeviceOS.Android,           // Operating system identifier
        memoryTier: 2,                        // Device memory tier
        platformType: 2,                      // Platform type
        uiProfile: 0,                         // UI profile setting
        graphicsMode: 0,                      // Graphics capabilities
    },
});

// Connect to the server
client.connect();
```

## Authentication

### Online Mode (Xbox Authentication)

When `offline: false` (the default), your client will authenticate with Microsoft Xbox Live. This is required for most public servers.

```ts
const client = new Client({
    offline: false,  // Enable Xbox authentication
    tokensFolder: "tokens",  // Directory to store auth tokens
});

client.connect();
```

On first run, you'll see a prompt like this:

```
[INFO] To sign in, use a web browser to open the page https://www.microsoft.com/link and use the code ABC123
```

Simply:
1. Open the provided URL in your browser
2. Enter the displayed code
3. Complete the Microsoft login process

The authentication tokens are cached in the specified folder, so you'll only need to do this once unless the tokens expire.

### Offline Mode

For local testing or servers that don't require authentication:

```ts
const client = new Client({
    offline: true,
    username: "TestBot",  // Your chosen username
});

client.connect();
```

## Troubleshooting

### Common Issues

**Connection Failed**: Ensure the server is running and the address/port are correct.

**Authentication Errors**: Make sure you have a valid Microsoft account and internet connection.