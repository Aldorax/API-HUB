import os
from src.config import settings

# Try to import Resend, fallback to console logging in dev
try:
    import resend

    resend.api_key = settings.RESEND_API_KEY
    RESEND_AVAILABLE = bool(settings.RESEND_API_KEY)
except ImportError:
    RESEND_AVAILABLE = False


async def send_magic_link_email(email: str, token: str) -> bool:
    """Send magic link email via Resend (or console log in dev)."""
    magic_link = f"{settings.MAGIC_LINK_URL}?token={token}"

    # In development, just print to console if Resend not configured
    if settings.ENVIRONMENT == "development" and not RESEND_AVAILABLE:
        print(f"\n{'='*50}")
        print(f"MAGIC LINK FOR {email}:")
        print(magic_link)
        print(f"{'='*50}\n")
        return True

    if not RESEND_AVAILABLE:
        print("ERROR: Resend not configured and not in development mode")
        return False

    try:
        params = {
            "from": settings.FROM_EMAIL,
            "to": [email],
            "subject": "Your Naija API Hub Magic Link",
            "html": f"""
            <!DOCTYPE html>
            <html>
            <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Welcome to Naija API Hub</h2>
                <p>Click the button below to sign in. This link expires in {settings.MAGIC_LINK_EXPIRY_MINUTES} minutes.</p>
                <a href="{magic_link}" style="background-color: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Sign In</a>
                <p style="margin-top: 20px;">If you didn't request this, you can safely ignore this email.</p>
                <hr>
                <p style="color: #6B7280; font-size: 12px;">Naija API Hub – Building the API infrastructure for Africa.</p>
            </body>
            </html>
            """,
        }
        resp = resend.Emails.send(params)
        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False
