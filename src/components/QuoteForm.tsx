import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { waLink } from "@/lib/business";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  organization: z.string().trim().min(2, "Please enter your school or organization").max(150),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[0-9+\-\s()]+$/, "Phone may contain only digits and + - ( ) spaces"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(5, "Tell us what you need").max(1000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const initial: FormData = { fullName: "", organization: "", phone: "", email: "", message: "" };

export const QuoteForm = () => {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach((i) => { fieldErrors[i.path[0] as keyof FormData] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSuccess(true);
    setData(initial);
  };

  if (success) {
    const waMsg = "Hello Trippletone Stationeries, I just submitted a quote request on your website.";
    return (
      <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-success/30 text-center animate-fade-up">
        <div className="w-16 h-16 mx-auto rounded-full bg-success/15 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-2xl font-extrabold text-foreground mb-2">Thank you! Your request was sent.</h3>
        <p className="text-muted-foreground mb-6">
          We've received your details and will get back to you shortly with a quote. For faster service, you can also message us on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground">
            <a href={waLink(waMsg)} target="_blank" rel="noopener">Message on WhatsApp</a>
          </Button>
          <Button variant="outline" onClick={() => setSuccess(false)}>Send another request</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated border border-border space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" value={data.fullName} onChange={update("fullName")} placeholder="Jane Achieng" maxLength={100} />
          {errors.fullName && <p className="text-xs text-destructive font-medium">{errors.fullName}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="organization">School or organization</Label>
          <Input id="organization" value={data.organization} onChange={update("organization")} placeholder="Katito Secondary School" maxLength={150} />
          {errors.organization && <p className="text-xs text-destructive font-medium">{errors.organization}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" value={data.phone} onChange={update("phone")} placeholder="07XX XXX XXX" maxLength={20} />
          {errors.phone && <p className="text-xs text-destructive font-medium">{errors.phone}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" value={data.email} onChange={update("email")} placeholder="you@example.com" maxLength={255} />
          {errors.email && <p className="text-xs text-destructive font-medium">{errors.email}</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Items needed or message</Label>
        <Textarea id="message" value={data.message} onChange={update("message")} rows={5} maxLength={1000} placeholder="e.g. 200 exercise books, 5 microscopes, 100 geometry sets..." />
        {errors.message && <p className="text-xs text-destructive font-medium">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-accent-glow">
        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <><Send className="w-4 h-4" /> Send Quote Request</>}
      </Button>
      <p className="text-xs text-muted-foreground text-center">We typically respond within a few hours during business days.</p>
    </form>
  );
};
