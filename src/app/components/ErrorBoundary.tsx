import React, { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full text-red-800">
                        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
                        <pre className="text-sm bg-red-100 p-4 rounded overflow-auto max-h-48">
                            {this.state.error?.message}
                        </pre>
                        <p className="mt-4 text-sm text-gray-600">Check console for details.</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
