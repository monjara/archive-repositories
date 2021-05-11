package trace

// Tracer includes Trace method
type Tracer interface {
	Trace(...interface{})
}
